import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const trans_id = queryParams.get("trans_id");
    const name = queryParams.get("name");
    const amount = queryParams.get("amount");

    return (
        <div className="p-10 flex flex-col items-center justify-center  ">
            <h1 className="lg:text-4xl text-xl font-bold pb-10">Thank you for your donation.</h1>
            <h3 className="mb-2 lg:text-2xl"><span className="font-bold">Transaction Id:</span> {trans_id}</h3>
            <h3 className="mb-2 lg:text-2xl"><span className="font-bold">Donar Name:</span> {name}</h3>
            <h3 className="mb-2 lg:text-2xl"><span className="font-bold">Donated Amount:</span> {amount}</h3>
        </div>
    );
};

export default PaymentSuccess;
