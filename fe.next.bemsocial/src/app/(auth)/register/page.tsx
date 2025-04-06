import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

export default function Register() {
    return (
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex flex-col items-center mb-4">
                    <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                        BemSocial
                    </Link>
                    <h1 className="font-sans text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create your account
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Join our growing social community
                    </p>
                </div>

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
                    <div className="flex items-start mt-2">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                aria-describedby="terms"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800"
                                required
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="terms"
                                className="text-gray-500 dark:text-gray-300">
                                I agree to the <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Privacy Policy</a>
                            </label>
                        </div>
                    </div>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800" type="submit">
                        Create account
                    </Button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
