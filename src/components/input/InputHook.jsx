import { useController } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const InputHook = ({ control, ...prop }) => {
    const { field } = useController({ control, name: prop.name, defaultValue: "" })
    return (
        <input className="p-4 rounded transition-all bg-white border border-transparent w-full focus:border-blue-300" {...field} {...prop} />
    );
};

export default InputHook;