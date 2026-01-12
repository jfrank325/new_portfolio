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
            className={`rounded-lg px-6 py-2.5 mx-1 font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                primary 
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            } disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm ${className}`}
        >
            {children}
        </button>
    );
};

export default BasicButton;