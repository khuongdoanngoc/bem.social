import Button from '@/components/Button';
import Input from '@/components/Input';
import Image from 'next/image';
import GoogleICON from '../../../../public/google.png';
import FacebookICON from '../../../../public/facebook.png';
import Link from 'next/link';

export default function Login() {
    return (
        <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className="flex flex-col items-center mb-4">
                    <Link
                        href="/"
                        className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2"
                    >
                        BemSocial
                    </Link>
                    <h1 className="font-sans text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Welcome back to the social experience
                    </p>
                </div>

                <div className="flex w-full justify-around">
                    <button className="flex rounded-lg text-sm justify-center items-center gap-[6px] border dark:border-gray-400 shadow-md py-2 px-3 text-gray-500 hover:border-indigo-400 transition-colors">
                        <Image src={GoogleICON} width={20} alt="google" />
                        Login with Google
                    </button>
                    <button className="flex rounded-lg text-sm justify-center items-center gap-[6px] dark:border-gray-400 shadow-md border py-2 px-3 text-gray-500 hover:border-indigo-400 transition-colors">
                        <Image src={FacebookICON} width={20} alt="facebook" />
                        Login with Facebook
                    </button>
                </div>
                <div className="flex items-center justify-center my-3">
                    <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                    <span className="mx-3 text-gray-400">or</span>
                    <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <form className="space-y-4 md:space-y-6" action="#">
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
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-indigo-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-indigo-600 dark:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="remember"
                                    className="text-gray-500 dark:text-gray-300"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <Button
                        className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
                        type="submit"
                    >
                        Sign in
                    </Button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                        Don&apos;t have an account yet?{' '}
                        <Link
                            href="/register"
                            className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                        >
                            Create account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
