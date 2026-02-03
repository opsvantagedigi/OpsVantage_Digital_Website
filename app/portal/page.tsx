import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MagneticButton from "@/components/ui/magnetic-button";

const PortalLoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-orbitron font-bold tracking-tighter mb-2">
            Client Portal
          </h1>
          <p className="font-inter text-gray-400">
            Secure access to your digital ecosystem.
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500"
              />
              <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </Label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <MagneticButton type="submit" className="w-full">
              Sign In
            </MagneticButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortalLoginPage;
