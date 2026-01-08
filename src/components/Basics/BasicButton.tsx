interface BasicButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    primary?: boolean;
}

const BasicButton = ({
    children,
    onClick,
    type = "button",
    disabled = false,
    className = "",
    primary = false,
}: BasicButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`rounded-lg px-6 py-2 mx-1 transition-all duration-200 border ${primary ? "bg-blue-600 hover:bg-gray-100 text-gray-100 hover:text-blue-600 focus:ring-blue-600" : "bg-gray-100  hover:bg-gray-700 hover:text-gray-100 border-gray-700 focus:ring-gray-700"} disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring transition-colors cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
};

export default BasicButton;