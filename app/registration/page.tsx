"use client"

import Image from "next/image"
import { useState } from "react";
import axios from "axios"

/*type User = {
    email: string,
    firstname: string,
    lastname: string,
    password: string
}*/

export default function Registration() {
    const [email, setemail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const [confirmPassword, setconfirmPassword] = useState<string>('');
    const [firstname, setfirstname] = useState<string>('');
    const [lastname, setlastname] = useState<string>('');
    const [gender, setgender] = useState<string>('');
    const [tel, settel] = useState<string>('');

    function createUser() {
        const user = {
            email: "user@example.com",
            firstname: "John",
            lastname: "Doe",
            password: "password123",
        };

        axios
            .post("/api/createUser", user)
            .then((response) => {
                console.log(response.data.message); // Output: "User inserted successfully"
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    const submitOnclick = () => {
        createUser();
    }
    return (
        <>
            <div className="bg-cover bg-[url('https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
                <div className="backdrop-blur-sm bg-white/30">
                    <div className="relative flex flex-col justify-center">
                        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl my-5 min-w-320">
                            <h1 className="text-3xl font-semibold text-center text-blue">ข้อมูลส่วนตัว</h1>
                            <div className="flex flex-col mt-5 items-center">
                                <div className="w-[100px] h-[100px] bg-lightblue rounded-full flex justify-center">
                                    <Image alt="user profile" src="UserPlus.svg" width={50} height={50} />
                                </div>
                                <button type="button" className="text-blue border border-blue font-medium rounded-lg text-sm px-2 py-1 mt-1 text-center ">เปลี่ยนรูปโปรไฟล์</button>
                            </div>
                            <form className="space-y-2">
                                <div>
                                    <label className="label">
                                        <span className="text-base font-semibold label-text text-black">อีเมล์
                                            <span className="text-xs font-normal"> (กรุณาระบุ)
                                                <span className="text-red">*
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                    <input type="text" placeholder="ระบุ" value={email} onChange={e => setemail(e.target.value)}
                                        className="w-full input input-bordered bg-white border-2 border-gray-300" />
                                </div>
                                <div>
                                    <span className="text-base font-semibold label-text text-black">รหัสผ่าน
                                        <span className="text-xs font-normal"> (กรุณาระบุ)
                                            <span className="text-red">*
                                            </span>
                                        </span>
                                    </span>
                                    <input type="password" placeholder="ระบุ" value={password} onChange={e => setpassword(e.target.value)}
                                        className="w-full input input-bordered bg-white border-2 border-gray-300" />
                                </div>
                                <div>
                                    <span className="text-base font-semibold label-text text-black">ยืนยันรหัสผ่าน
                                        <span className="text-xs font-normal"> (กรุณาระบุ)
                                            <span className="text-red">*
                                            </span>
                                        </span>
                                    </span>
                                    <input type="password" placeholder="ระบุ" value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)}
                                        className="w-full input input-bordered bg-white border-2 border-gray-300" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-base font-semibold label-text text-black">ชื่อ
                                            <span className="text-xs font-normal"> (กรุณาระบุ)
                                                <span className="text-red">*
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                    <input type="text" placeholder="ระบุ" value={firstname} onChange={e => setfirstname(e.target.value)}
                                        className="w-full input input-bordered bg-white border-2 border-gray-300" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-base font-semibold label-text text-black">นามสกุล
                                            <span className="text-xs font-normal"> (กรุณาระบุ)
                                                <span className="text-red">*
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                    <input type="text" placeholder="ระบุ" value={lastname} onChange={e => setlastname(e.target.value)}
                                        className="w-full input input-bordered bg-white border-2 border-gray-300" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-base font-semibold label-text text-black">เพศ
                                            <span className="text-xs font-normal"> (กรุณาเลือก)
                                                <span className="text-red">*
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                    <div className="btn-group">
                                        <button type="button" className={`btn ${gender === 'ชาย' ? 'btn-active' : ''}`} onClick={() => setgender("ชาย")} >ชาย</button>
                                        <button type="button" className={`btn ${gender === 'หญิง' ? 'btn-active' : ''}`} onClick={() => setgender("หญิง")} >หญิง</button>
                                        <button type="button" className={`btn ${gender === 'ไม่ระบุ' ? 'btn-active' : ''}`} onClick={() => setgender("ไม่ระบุ")} >ไม่ระบุ</button>
                                    </div>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-base font-semibold label-text text-black">วัน/เดือน/ปี เกิด
                                            <span className="text-xs font-normal"> (กรุณาเลือก)
                                                <span className="text-red">*
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                    <div className="flex">
                                        <select className="select select-bordered max-w-xs mr-1" defaultValue={""}>
                                            <option disabled value={""}>วัน</option>
                                            <option value={"1"}>1</option>
                                            <option value={"2"}>2</option>
                                        </select>
                                        <select className="select select-bordered  max-w-xs mr-1" defaultValue={""}>
                                            <option disabled value={""}>เดือน</option>
                                            <option value={"1"}>1</option>
                                            <option value={"2"}>2</option>
                                        </select>
                                        <select className="select select-bordered  max-w-xs" defaultValue={""}>
                                            <option disabled value={""}>ปี</option>
                                            <option value={"1"}>1</option>
                                            <option value={"2"}>2</option>
                                        </select>
                                    </div>

                                </div>
                                <div>
                                    <label className="label">
                                        <span className="text-base font-semibold label-text text-black">เบอร์โทรศัพท์
                                            <span className="text-xs font-normal"> (กรุณาระบุ)
                                                <span className="text-red">*
                                                </span>
                                            </span>
                                        </span>
                                    </label>
                                    <input type="text" placeholder="ระบุ" value={tel} onChange={e => settel(e.target.value)}
                                        className="w-full input input-bordered bg-white border-2 border-gray-300" />
                                </div>
                                <div className="divider"><Image alt="user profile" src="UserPlus.svg" width={20} height={20} /></div>
                                <div className="flex items-center">
                                    <input type="checkbox" readOnly className="checkbox" /><span className="ml-1">ยินยอมให้ข้อมูล</span>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary" onClick={submitOnclick}>ลงทะเบียน</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}