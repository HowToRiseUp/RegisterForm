import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const DropdowHook = ({ control, setValue, name, labelValue, data }) => {
    const { show, nodeRef, setShow } = useClickOutSide("div")
    // eslint-disable-next-line no-unused-vars
    const dropdownValue = useWatch({
        control,
        name,
        defaultValue: "",
    });
    const [label, setLabel] = useState(labelValue)
    const hanldSetValue = (e) => {
        setValue(name, e.target.dataset.name)
        setLabel(e.target.textContent)
        setShow(false)
    }
    return (
        <div className="relative" ref={nodeRef}>
            <div className="p-4 rounded transition-all bg-white flex justify-between items-center" onClick={() => {
                setShow(!show)
            }}>
                <div className="text-sm text-[#999999]">{label}</div>
            </div>
            <div className={`${show ? '' : 'opacity-0 invisible'} absolute w-full rounded overflow-hidden`}>
                {                // eslint-disable-next-line react/prop-types
                }                {data.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 transition-all bg-white border-t border-gray-300 hover:bg-gray-400 cursor-pointer"
                        data-name={item.name}
                        onClick={hanldSetValue}
                    >
                        {item.name}
                    </div>
                ))}
            </div>

        </div>
    );
};


export default DropdowHook;