import { Mail } from "lucide-react";
import {useEffect, useState} from "react";
import Redirection from "../../../../components/common/Redirection";
import {useNavigate} from "react-router";
import {updateEmail} from "../../../../api/auth";

export default function Kakao() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const { searchParams } = new URL(window.location.href);
  const accessToken = searchParams.get("access_token");
  const emailYn = searchParams.get("email");

  const handleContinue = () =>{
      try {
        if(accessToken){
          sessionStorage.setItem("access_token", accessToken);
        }
        const {data} = updateEmail({email});

      }catch (e) {

      }
  }
  const handleChange = (event) =>{
    setEmail(event.target.value);
  }


  useEffect(()=>{
    if(emailYn === 'N'){
      setShowForm(true);
    }

  },[emailYn])

  return (
    <>
      <>
        {/* 이메일 정보를 받아야 할 때 */}
        {showForm ?
            <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
              <div className="w-full max-w-md">
                <div className="bg-slate-800 rounded-lg shadow-xl p-8">
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-white mb-2">
                      You're almost there
                    </h1>
                    <p className="text-gray-400">Sign up with just your email!</p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"/>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                      </div>
                      <p className="text-rose-500 mt-2">Failed Update</p>
                    </div>
                    <div className="flex gap-3">
                      <button
                          type="button"
                          className="flex-1 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                          onClick={()=> navigate(-1)}
                      >
                        Cancel
                      </button>
                      <button
                          type="submit"
                          className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                          onClick={handleContinue}
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div> :
            <Redirection/>
        }

      </>
    </>
  );
}
