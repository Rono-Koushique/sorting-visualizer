function SinglePole({ number, max, differ }) {
    const percentage = ((number / max) * 100).toString();
    return (
        <div
            className={`w-full ${!differ ? "bg-cyan-600" : "bg-rose-600"}`}
            style={{ height: `${percentage}%` }}
        />
    );
}

export default SinglePole;
