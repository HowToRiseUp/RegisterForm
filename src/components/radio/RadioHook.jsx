import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const RadioHook = ({ control, ...prop }) => {
    const { field } = useController({ control, name: prop.name, defaultValue: "" })
    return (
        <label className="custom-radio w-[10px] h-[10px] cursor-pointer">
            <input type="radio" {...field} {...prop} className="hidden" />
            <div className="bg-white w-full h-full rounded-full custom-radio pointer-events-none"></div>
        </label>
    );
};

export default RadioHook;