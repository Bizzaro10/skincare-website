import React from "react";
import Button from "../components/Button";

const Header2 = () => {
    return (
        <div className="container mx-auto mb-20 pt-8">
            <div className="grid grid-cols-3 items-center">
                {/* Left side - Best Selling Products text */}
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full w-fit border border-[#2D3B36]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2D3B36]"></div>
                    <span className="text-sm font-medium text-[#2D3B36]">
            Best Selling Products
          </span>
                </div>

                {/* Center - Heading */}
                <h1 className="text-[35px] font-inter text-[#2D3B36] leading-tight text-center">
                    Skincare That Brings Out
                    <br />
                    Your Natural Radiance
                </h1>

                {/* Right side - Navigation buttons */}
                <div className="flex gap-6 justify-end">
                    <Button
                        direction="left"
                        variant="light"
                        onClick={() => console.log("Previous")}
                    />
                    <Button
                        direction="right"
                        variant="dark"
                        onClick={() => console.log("Next")}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header2;
