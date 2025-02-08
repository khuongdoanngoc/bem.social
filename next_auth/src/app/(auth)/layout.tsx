import Image from "next/image";
import Nextjs from "../favicon.ico";
import Nestjs from "../../../public/nest-logo.svg";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <Image
                    width={32}
                    height={32}
                    className="w-8 h-8 mr-2"
                    src={Nextjs}
                    alt="logo"
                />
                Auth App
                <Image
                    width={32}
                    height={32}
                    className="w-8 h-8 ml-2"
                    src={Nestjs}
                    alt="logo"
                />
            </a>
            {children}
        </div>
    );
}
