import React, {useState} from 'react';
import InputText from "./FormComponent/InputText";
import InputEmail from "./FormComponent/InputEmail";
import InputRadio from "./FormComponent/InputRadio";
import CheckBox from "./FormComponent/CheckBox";
import TextArea from "./FormComponent/TextArea";

function UserInfo() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        gender: '',
        skills: [],
        bio: ''
    });
    const skill = ['Javascrpt', 'React', 'Node.js']

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        setUserInfo(prevState => {
            const skills = checked
                ? [...prevState.skills, value]
                : prevState.skills.filter(skill => skill !== value);
            return {
                ...prevState,
                [name]: skills
            };
        });
    }

    return (
        <div>
            <InputText
                type="text"
                name="name"
                placeholder="Name"
                value={userInfo.name}
                onChange={handleChange}
            />
            <InputEmail
                type="email"
                name="email"
                placeholder="Email"
                value={userInfo.email}
                onChange={handleChange}
            />
            <p>Gender</p>
            {['Female','Male'].map(data=> {
                return(
                    <>
                        <InputRadio
                            name="gender"
                            value={data}
                            checked={userInfo.gender === data}
                            onChange={handleChange}
                        />
                    </>
                )
            })}


            <p>Skills:</p>
            {skill.map((skill) => (
                <label key={skill}>
                    <CheckBox
                        type="checkbox"
                        name="skills"
                        value={skill}
                        onChange={handleCheckBoxChange}
                    />
                    {skill}
                </label>
            ))}
            <p>Bio</p>
            <TextArea
                name="bio"
                value={userInfo.bio}
                onChange={handleChange}
            />
        </div>
    );
}

export default UserInfo;