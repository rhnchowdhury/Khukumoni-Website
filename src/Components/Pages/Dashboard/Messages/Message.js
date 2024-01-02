import React from 'react';

const Message = () => {
    return (
        <div className='mt-5'>
            <h2 className="card-title text-[#F7941D] text-center justify-center">SMS Information</h2>
            <hr className="h-px my-2 mx-16 bg-[#F7941D]"></hr>
            <div className='mx-4 grid grid-cols-2'>
                <div className=''>
                    <p className='my-4 text-[#F7941D] text-xl'>Message</p>
                    <form>
                        <textarea className="textarea textarea-bordered textarea-lg w-full h-48 max-w-xs" ></textarea>
                        <input className='mt-3 btn w-full max-w-xs text-white bg-[#F7941D] border-[#F7941D] hover:bg-[#F7941D]' value='Send' type="submit" />
                    </form>
                </div>
                <div className='mt-4'>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead className='sticky top-0'>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>Donor Name</th>
                                    <th>Mobile No</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>

                                    <td>
                                        Zemlak Daniel

                                    </td>
                                    <td>Red</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>

                                    <td>
                                        Carroll Group

                                    </td>
                                    <td>Red</td>

                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>

                                    <td>
                                        Rowe-Schoen

                                    </td>
                                    <td>Crimson</td>

                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>Wyman-Ledner</td>
                                    <td>Indigo</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;