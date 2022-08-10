/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
*/

import connectDB from '../../../db/connection'
import Model from '../../../models/user'
const bcrypt = require('bcrypt');

import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from "next-auth/providers/github"
import CredentialProvider from 'next-auth/providers/credentials'

// TODO add all these env 
export default NextAuth({
  providers: [
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "love@mail.com" },
        password: { label: "Password", type: "password", placeholder: "..." },
      },
      authorize: async (credentials) => {

        // todo database lookup
        await connectDB()
        const foundUser = await Model.findOne({ email: credentials.email }).exec();

        console.log("user login: " + foundUser.email);

        if (foundUser === null) {
          console.log('i dont exist');
          return null;
        } // unauthorized

        const match = await bcrypt.compare(credentials.password, foundUser.password)

        console.log();

        if (credentials.email === foundUser.email && match) {
          return {
            id: foundUser._id,
            name: foundUser.name,
            email: foundUser.email,
            color: foundUser.color,
            roles: foundUser.roles
          }
        }

        // login failed catch all
        return null;
      },
    })
    // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log(user);
      if (user) {
        token.id = user.id,
        token.color = user.color
        token.roles = user.roles

      }
      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.id = token.id,
        session.user.color = token.color
        session.user.roles = token.roles

      }
      return session
    }
  },
  secret: "super*St0NGSe7ctret#",
  jwt: {
    secret: "super*St0NGSe7ctret#",
    encryption: true,
  }
})

const handleLogin = async (credentials) => {

} 