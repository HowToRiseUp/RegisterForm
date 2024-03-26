import { useForm } from "react-hook-form";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import DropdowHook from "../dropdow/DropdowHook";
import CheckboxHook from "../checkbox/CheckboxHook";

const RegisterForm = () => {
    const {
        control,
        handleSubmit,
        setValue
        // formState: { errors },
    } = useForm({
    })

    const dataDropdow = [
        { id: 1, name: "Front End" },
        { id: 2, name: "Back End" },
        { id: 3, name: "Full Stack" }
    ];

    const onSubmiting = (data) => console.log(data)


    return (
        <form className="w-[300px] mx-auto mt-12" onSubmit={handleSubmit(onSubmiting)} autoComplete="off">
            <div className="flex flex-col gap-1 mt-3">
                <label className="font-medium text-sm" htmlFor="username">Username</label>
                <InputHook name="username" placeholder="Enter your username" id="username" control={control} />
            </div>
            <div className="flex flex-col gap-1 mt-3">
                <label className="font-medium text-sm" htmlFor="password">Password</label>
                <InputHook name="password" placeholder="Enter your password" id="password" type='password' control={control} />
            </div>
            <div className="flex flex-col gap-1">
                <label className="font-medium text-sm mt-3" htmlFor="email">Email address</label>
                <InputHook name="email" placeholder="Enter your email address" id="email" type='email' control={control} />
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <label className="font-medium text-sm" htmlFor="gender">Gender</label>
                <div className="flex mt-2 gap-5 ml-1">
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
            <div className="flex flex-col gap-1 mt-4">
                <label className="font-medium text-sm" htmlFor="job">Are you</label>
                <DropdowHook control={control}
                    setValue={setValue}
                    name="job"
                    labelValue="Select your job"
                    data={dataDropdow}
                ></DropdowHook>
            </div>
            <div className="flex flex-col gap-1 mt-4">
                <CheckboxHook control={control} name="term"></CheckboxHook>
            </div>
            <button className="text-sm font-bold bg-[#0b0d11] p-3 text-white w-full mt-6 rounded">Submit</button>
        </form>
    );
};

export default RegisterForm;