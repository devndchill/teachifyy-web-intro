"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import { useTrackDownloadMutation } from "@/app/api/contact";
import { Resource } from "./ResourceCarousel";

interface Props {
  resource: Resource;
  onClose: () => void;
}

export default function LeadDownloadModal({ resource, onClose }: Props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    profession: "",
    qualifications: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: trackDownload, isPending } = useTrackDownloadMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Child Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.age.trim()) newErrors.age = "Standard is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.profession.trim()) newErrors.profession = "School Name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ageMap: Record<string, string> = {
      V: "5",
      VI: "6",
      VII: "7",
      VIII: "8",
      IX: "9",
      X: "10",
    };
    const normalAge = ageMap[formData.age] || formData.age;

    trackDownload(
      {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        age: normalAge || null,
        city: formData.city || null,
        profession: formData.profession || null,
        qualifications: formData.qualifications || null,
        cta: null,
        resourceId: resource.id,
      },
      {
        onSuccess: () => {
          // Trigger the actual download
          localStorage.setItem("downloadEmail", formData.email);
          window.open(resource.documentUrl, "_blank", "noopener,noreferrer");
          onClose();
        },
        onError: () => {
          setErrors({ submit: "Something went wrong. Please try again." });
        },
      }
    );
  };

  const inputClasses =
    "w-full border border-gray-200 rounded-[10px] px-4 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#FF4667]/20 focus:border-[#FF4667] transition-all bg-white text-gray-800 placeholder:text-gray-400";
  const labelClasses = "block text-[13px] font-semibold text-gray-700 mb-1.5";

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Modal panel */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.18)] p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-[22px] font-bold text-gray-900 leading-tight">
            Download{" "}
            <span className="text-[#FF4667]">{resource.name}</span>
          </h2>
          <p className="text-[13px] text-gray-500 mt-1">
            Fill in your details to get instant access to the PDF.
          </p>
        </div>

        {errors.submit && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-[13px] text-center font-medium">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="dl-fullName" className={labelClasses}>Child Name</label>
              <input
                type="text"
                id="dl-fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClasses}
              />
              {errors.fullName && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="dl-email" className={labelClasses}>Parents Email Id</label>
              <input
                type="email"
                id="dl-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClasses}
              />
              {errors.email && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="dl-phone" className={labelClasses}>Parents Phone Number</label>
              <input
                type="tel"
                id="dl-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className={inputClasses}
              />
              {errors.phone && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.phone}</p>
              )}
            </div>

            {/* Age */}
            <div>
              <label htmlFor="dl-age" className={labelClasses}>Standard</label>
              <select
                id="dl-age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select Standard</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
                <option value="X">X</option>
              </select>
              {errors.age && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.age}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label htmlFor="dl-city" className={labelClasses}>City</label>
              <input
                type="text"
                id="dl-city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={inputClasses}
              />
              {errors.city && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.city}</p>
              )}
            </div>

            {/* Profession */}
            <div>
              <label htmlFor="dl-profession" className={labelClasses}>School Name</label>
              <input
                type="text"
                id="dl-profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder=""
                className={inputClasses}
              />
              {errors.profession && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.profession}</p>
              )}
            </div>
          </div>

          {/* Qualifications — full width */}
          {/* <div>
            <label htmlFor="dl-qualifications" className={labelClasses}>Question</label>
            <input
              type="text"
              id="dl-qualifications"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              className={inputClasses}
            />
            {errors.qualifications && (
              <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.qualifications}</p>
            )}
          </div> */}

          <Button
            type="submit"
            isLoading={isPending}
            className="w-full bg-[#FF4667] hover:bg-[#E03A56] text-white rounded-[12px] py-3.5 text-[15px] font-semibold border-none shadow-[0_4px_14px_rgba(255,70,103,0.3)] hover:shadow-[0_6px_20px_rgba(255,70,103,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            Download PDF
          </Button>
        </form>
      </div>
    </div>
  );
}
