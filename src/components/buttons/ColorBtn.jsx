function ColorBtn({ children, onClick, className, disabled }) {
    return (
        <button
            className={`px-4 py-2 rounded flex items-center text-neutral-900 ${className} transition duration-150 ease-in-out disabled:bg-neutral-500`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default ColorBtn;
