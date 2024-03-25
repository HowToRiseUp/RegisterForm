import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";

const RegisterForm = () => {
    const {
        control,
        handleSubmit,
        // formState: { errors },
    } = useForm({
    })


    const onSubmiting = (data) => console.log(data)


    return (
        <form className="w-[300px] mx-auto mt-12" onSubmit={handleSubmit(onSubmiting)}>
            <div className="flex flex-col gap-1">
                <label className="font-medium text-sm" htmlFor="username">Username</label>
                <InputHook name="username" placeholder="Enter your username" id="username" control={control} />
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <label className="font-medium text-sm" htmlFor="gender">Gender</label>
                <div className="flex mt-2 gap-5">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <RadioHook control={control} name="gender" value="male" />
                        <span className="text-[#999999]">Male</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <RadioHook control={control} name="gender" value="female" />
                        <span className="text-[#999999]">Female</span>
                    </label>
                </div>
            </div>
            <button className="text-sm font-bold bg-[#0b0d11] p-3 text-white w-full mt-6 rounded">Submit</button>
        </form>
    );
};

export default RegisterForm;