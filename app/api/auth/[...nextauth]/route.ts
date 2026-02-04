import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import dbConnect from "@/lib/db";
import User from "@/models/User";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/portal",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        await dbConnect();

        const user = await User.findOne({ email: credentials?.email }).select('+password');

        if (user && credentials?.password) {
          const passwordMatch = await compare(credentials.password, user.password);
          if (passwordMatch) {
            return { id: user._id.toString(), name: user.name, email: user.email, role: user.role };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
