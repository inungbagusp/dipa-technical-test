const Container = ({ children, className = "" }) => {
	return (
		<div className={`mx-auto max-w-[1320px] px-[60px] ${className}`}>
			{children}
		</div>
	);
}

export default Container;
