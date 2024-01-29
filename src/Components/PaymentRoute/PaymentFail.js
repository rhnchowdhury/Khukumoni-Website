const PaymentFail = () => {
    const style = {
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div className="p-5 " style={style}>
            <h1 className="text-4xl font-bold">Payment Failed! Try Again.</h1>
        </div>
    );
};

export default PaymentFail;