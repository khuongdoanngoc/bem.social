interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
    errorMessage?: string;
    className?: string;
    id?: string;
}
export default function Input({
    label,
    error,
    errorMessage,
    className,
    id,
    ...props
}: InputProps) {
    return (
        <div>
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>
            <input
                id={id}
                className={` ${
                    error
                        ? "dark:border-red-500 fdark:ocus:ring-red-500 dark:caret-red-500 dark:text-red-500 focus:border-red-500"
                        : "text-gray-900"
                } bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 dark:focus:outline-none focus:ring-1 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white `}
                {...props}
            />
            {error && (
                <label className="text-red-500 font-normal ml-1">
                    {errorMessage}
                </label>
            )}
        </div>
    );
}
