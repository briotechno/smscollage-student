"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Backpack, CornerUpLeft, LogIn, LogOut, User } from "lucide-react";

const QuickRegistrationpage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-24 pt-42">
            <div className="w-full max-w-6xl bg-white rounded-xl shadow-xl border">

                {/* Header */}
                <div className="flex items-center justify-between gap-3 border-b text-purple-600 px-6">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center">
                            <User className="w-5 h-5 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-purple-700">
                            Quick Registration
                        </h3>
                    </div>

                    <div className="h-20 w-20 lg:h-28 lg:w-28 relative flex-shrink-0">
                        <Image src="/assets/logo2.png" alt="College logo" fill className="object-contain" />
                    </div>
                </div>

                {/* Form */}
                <form className="p-6 space-y-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm text-gray-700 font-medium">
                                Program Type <span className="text-red-500">*</span>
                            </label>
                            <select className="mt-1 text-gray-700 w-full border border-purple-600 rounded-md px-3 py-2 text-sm">
                                <option>-- Please Select --</option>
                                <option>UG</option>
                                <option>PG</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm text-gray-700 font-medium">
                                APAAR ID (ABC ID)
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full border border-purple-600 text-gray-700 rounded-md px-3 py-2 text-sm"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-700 font-medium">
                                Name as per Marksheet <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full border border-purple-600 text-gray-700 rounded-md px-3 py-2 text-sm"
                            />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm text-gray-700 font-medium">
                                Category <span className="text-red-500">*</span>
                            </label>
                            <select className="mt-1 w-full border border-purple-600 text-gray-700 rounded-md px-3 py-2 text-sm">
                                <option>-- Please Select --</option>
                                <option>General</option>
                                <option>OBC</option>
                                <option>SC</option>
                                <option>ST</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm text-gray-700 font-medium">
                                Gender <span className="text-red-500">*</span>
                            </label>
                            <select className="mt-1 w-full border border-purple-600 text-gray-700 rounded-md px-3 py-2 text-sm">
                                <option>-- Please Select --</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm text-gray-700 font-medium">
                                Birth Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="DD-MM-YYYY"
                                className="mt-1 w-full border border-purple-600 text-gray-700 rounded-md px-3 py-2 text-sm"
                            />
                        </div>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                        <input type="checkbox" className="mt-1" />
                        <p>
                            I hereby give my consent to communicate with me about new
                            initiatives of Education Department, Government of Gujarat
                            through my Email ID and mobile number.
                        </p>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm text-gray-700 font-medium">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                className="mt-1 w-full border border-purple-600 text-gray-700 rounded-md px-3 py-2 text-sm"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-700 font-medium">
                                Mobile No. <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="mt-1 w-full border border-purple-600 text-gray-700 rounded-md px-3 py-2 text-sm"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-700 font-medium">
                                Captcha <span className="text-red-500">*</span>
                            </label>
                            <div className="flex gap-2 mt-1">
                                <input
                                    type="text"
                                    value="Total of 42 + 3 ="
                                    disabled
                                    className="w-full border border-purple-600 text-gray-700 rounded-md px-3 py-2 text-sm bg-gray-100"
                                />
                                <input
                                    type="text"
                                    placeholder="Captcha"
                                    className="w-full border text-gray-700 border-purple-600 rounded-md px-3 py-2 text-sm"
                                />
                                <button
                                    type="button"
                                    className="border rounded-md px-3 text-gray-700"
                                >
                                    🔄
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4">
                        <button
                            type="button"
                            className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-semibold"
                        >
                            Get OTP
                        </button>

                        <Link
                            href="/Student/login"
                            className="flex items-center justify-center text-purple-600 border border-purple-500 px-4 py-2 rounded-md text-sm font-bold"
                        >
                            <CornerUpLeft className="w-5 h-5" />
                            <span>Back to Login</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuickRegistrationpage;
