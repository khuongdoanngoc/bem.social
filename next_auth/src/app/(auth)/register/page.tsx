import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";

import Link from "next/link";

export default function Register() {
    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="font-sans text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Register
                </h1>

                <form className="space-y-4 md:space-y-6" action="#">
                    <Input
                        label="Your name"
                        id="name"
                        placeholder="Khang Nguyen..."
                        // error={true}
                        errorMessage="Invalid"
                        required
                    />
                    <Input
                        label="Your email"
                        id="email"
                        placeholder="name@company.com"
                        // error={true}
                        errorMessage="Invalid"
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        required
                    />
                    <Input
                        label="Confirm password"
                        type="password"
                        id="confirmPassword"
                        placeholder="••••••••"
                        required
                    />
                    <div className="flex items-center justify-end">
                        <a
                            href="#"
                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Forgot password?
                        </a>
                    </div>
                    <Button type="submit">Register</Button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
