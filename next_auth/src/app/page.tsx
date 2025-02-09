import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    Welcome to AuthApp
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    AuthApp is a personal project focused on Authentication and
                    Authorization, built with modern technologies to provide a
                    secure and scalable solution.
                </p>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                        Technologies Used
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-gray-600 dark:text-gray-300">
                            Next.js
                        </li>
                        <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-gray-600 dark:text-gray-300">
                            NestJS
                        </li>
                        <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-gray-600 dark:text-gray-300">
                            PostgreSQL
                        </li>
                        <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-gray-600 dark:text-gray-300">
                            Tailwind CSS
                        </li>
                        <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-gray-600 dark:text-gray-300">
                            TypeScript
                        </li>
                        <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-gray-600 dark:text-gray-300">
                            JWT (JSON Web Tokens)
                        </li>
                        <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-gray-600 dark:text-gray-300">
                            OAuth 2.0
                        </li>
                        <li className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-gray-600 dark:text-gray-300">
                            VPS (Virtual Private Server)
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/login">
                        <Button>Go to Login</Button>
                    </Link>
                    <Link href="/register">
                        <Button>Go to Register</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
