import { Button } from "@/components/ui/button";
import { User } from "@/lib/types";
import { LoaderCircle } from "lucide-react";

export default function Header({ user }: { user: User | undefined }) {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">AudioTech</h1>
          <nav className="hidden md:flex space-x-6">
            {user === undefined ? (
              <Button variant="outline" size="sm" disabled>
                <LoaderCircle className="animate-spin size-4" />
              </Button>
            ) : user ? (
              <Button variant="outline" size="sm">
                Logout
              </Button>
            ) : (
              <Button variant="outline" size="sm">
                Login
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
