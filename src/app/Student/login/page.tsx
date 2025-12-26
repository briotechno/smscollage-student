"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { User, Lock, Eye, EyeOff, LogIn, Info, Book, Clipboard, File } from "lucide-react";

const Studentlogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 pt-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-5">

                    {/* LEFT : INFORMATION SECTION */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">

                            <div className="flex items-center gap-3 border-b text-purple-600">
                                <div className="w-11 h-11 my-3 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Info className="w-5 h-5 text-purple-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-purple-700">
                                    Information for Student
                                </h3>
                            </div>

                            <h3 className="text-purple-600 font-semibold mb-2">
                                Instructions for Students:
                            </h3>

                            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
                                <li className="text-[16px]">
                                    <span className="text-purple-600 font-semibold">New Users:</span>{" "}
                                    Please click on <b>"Quick Registration"</b> button to register.
                                </li>
                                <li className="text-[16px]">
                                    <span className="text-purple-600 font-semibold">
                                        Already Registered User :
                                    </span>{" "}
                                    Please enter <b>"UserName (Email Id, Mobile No, ABC Id, Application No), Password and Captcha"</b>click on  <b>"Sign in"</b> and continue..
                                </li>
                                <li className="text-[16px]">
                                    <span className="text-purple-600 font-semibold">
                                        Forgot Password:
                                    </span>{" "}
                                    Click on <b>"Forgot Password"</b>to generate new password.
                                </li>
                                <li className="text-[16px]">
                                    Applicant are informed that Email ID and mobile number provided by them shall be used for all future communication related to admission.{" "}
                                    <br />
                                    <span>અરજીકર્તાઓને જણાવવામાં આવે છે કે તેમણે આપેલ ઇ-મેઈલ આઈ.ડી. અને મોબાઈલ નંબર પર GCAS દ્વારા ભવિષ્યમાં પ્રવેશને લગતી તમામ માહિતી મોકલવામાં આવશે.</span>
                                </li>
                                <li className="text-[16px]">
                                    Applicants are advised to maintain the email ID and mobile number provided by them throughout the admission process.{" "}
                                    <br />
                                    <span>અરજીકર્તાઓને તેમણે આપેલ ઇ-મેઇલ આઈ.ડી. અને મોબાઈલ નંબર પ્રવેશની સમગ્ર પ્રક્રિયા દરમ્યાન જાળવી રાખવા માટે જણાવવામાં આવે છે.</span>
                                </li>
                            </ol>
                        </div>
                        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">

                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 my-3 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Book className="w-5 h-5 text-purple-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-purple-700">
                                    Guidelines / માર્ગદર્શિકા
                                </h3>
                            </div>

                            <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
                                <li className="text-[16px]">
                                    <Link
                                        href=""
                                        className="text-purple-600 font-medium hover:underline"
                                    >
                                        Quick Registration Guide for Student Form Filling
                                    </Link>{" "}
                                    Or{" "}
                                    <Link
                                        href=""
                                        className="text-purple-600 font-medium hover:underline"
                                    >
                                        વિદ્યાર્થીના ફોર્મ ફીલિંગ માટે ક્વિક રજીસ્ટ્રેશનની માર્ગદર્શિકા
                                    </Link>
                                </li>
                            </ol>
                        </div>
                        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
                            
                            <div className="flex items-center gap-3 border-b text-purple-600 my-3">
                                <div className="w-11 h-11 my-3 rounded-full bg-purple-100 flex items-center justify-center">
                                    <File className="w-5 h-5 text-purple-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-purple-700">
                                    List of Documents to be uploaded online by the applicant:
                                </h3>
                            </div>

                            <ul className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
                                <li className="text-[16px]">
                                    Passport size photograph{" "}
                                    <span className="text-blue-600 text-sm">
                                        (Only JPG/JPEG and upto 5 MB file allowed)
                                    </span>
                                </li>
                                <li className="text-[16px]">
                                    Applicant signature{" "}
                                    <span className="text-blue-600 text-sm">
                                        (Only JPG/JPEG and upto 2 MB file allowed)
                                    </span>
                                </li>
                                <li className="text-[16px]">
                                    Marksheet(s) of Std. 12 (Required only if Std. 12 data is not auto-fetched) (Only JPG/PDF and upto 200 KB file allowed) - In case of multiple marksheets, merge them in a single file and upload.{" "} <br />
                                    <span>
                                        ધોરણ-12 ની માર્કશીટ (ધોરણ- 12નો ડેટા ઓટો-ફેચ ન થાય તે કિસ્સામાં) (ફક્ત JPG/PDF અને 200 KB સુધીની ફાઇલ) - એક કરતાં વધુ માર્કશીટના કિસ્સામાં, એક ફાઇલમાં મર્જ કરીને અપલોડ કરો.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT : LOGIN CARD */}
                    <div className="bg-white h-110 rounded-xl shadow p-6">

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center">
                                <LogIn className="w-5 h-5 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-purple-700">
                                Student Login
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

                                <input
                                    type="text"
                                    placeholder="User Name"
                                    className="w-full pl-10 pr-3 py-2 text-sm text-gray-700 border rounded-md border-purple-600"
                                />
                            </div>

                            <div className="flex items-center gap-4 text-sm">
                                <label className="flex items-center text-gray-700 gap-1">
                                    <input type="radio" name="loginType" defaultChecked />
                                    Password
                                </label>
                                <label className="flex items-center text-gray-700 gap-1">
                                    <input type="radio" name="loginType" />
                                    OTP
                                </label>
                            </div>

                            <select className="w-full text-gray-700 border border-purple-600 rounded-md px-3 py-2 text-sm">
                                <option>Select Form Type</option>
                                <option>UG Admission</option>
                                <option>PG Admission</option>
                            </select>

                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full pl-10 pr-10 py-2 text-sm text-gray-700 border rounded-md border-purple-600"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>

                            {/* CAPTCHA */}
                            <div className="flex items-center gap-2">
                                <div className="w-full border text-gray-700 rounded-md px-2 py-2 text-sm bg-gray-100 border-purple-600">
                                    Total of 6 + 8 =
                                </div>
                                <input
                                    type="text"
                                    placeholder="Answer"
                                    className="flex-1 text-gray-700 border rounded-md px-3 py-2 text-sm border-purple-600"
                                />
                                <button
                                    type="button"
                                    className="rounded-sm text-gray-700"
                                >
                                    🔄
                                </button>
                            </div>

                            <div className="flex justify-between text-xs text-purple-600 font-medium">
                                <Link href="/forgot-password"
                                    className="flex items-center gap-2 text-purple-600 hover:underline">
                                    <Lock className="w-4 h-4 text-purple-500" />
                                    <span>Forgot Password?</span>
                                </Link>

                                <Link href="/Student/QuickRegistration"
                                    className="flex items-center gap-2 text-purple-600 hover:underline">
                                    <User className="w-4 h-4 text-purple-500" />
                                    <span>Quick Registration</span>
                                </Link>
                            </div>

                            <button className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold">
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studentlogin;
