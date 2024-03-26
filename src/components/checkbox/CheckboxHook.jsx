import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const CheckboxHook = ({ control, ...prop }) => {
    const { field } = useController({ control, name: prop.name, defaultValue: "" })
    return (
        <label className="flex gap-5 items-center cursor-pointer">
            <div className="checkbox-hook w-6 h-6 rounded " >
                <input type="checkbox" {...field} {...prop} className="hidden" />
                <div className="bg-white w-full h-full rounded flex items-center justify-center">
                    <svg className="pointer-events-none" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7453 4.89733L5.93178 12.7109L2.25482 9.03391L3.17132 8.11741L5.93178 10.8714L12.8288 3.98083L13.7453 4.89733Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="text-sm text-[#999999] select-none">I accept the terms and coditions</div>
        </label>
    );
};


export default CheckboxHook;