import profilePicture from '../assets/a.jpg';
import smallProfilePicture from '../assets/b.jpg';

const ProfilePage = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="container w-[1200px] m-auto flex justify-center items-center h-screen">
                <div className="animate__animated animate__fadeIn animate__slower relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
                        <img
                            src={profilePicture}
                            className="w-full rounded-[10px]"
                            alt="profile-picture"
                        />
                        <div className="rounded-full">
                            <img
                                className="custom-border"
                                src={smallProfilePicture}
                                alt="small-profile-picture"
                            />
                        </div>
                    </div>
                    <div className="p-4 pt-20 pb-0">
                        <p className="block text-center font-sans text-3xl antialiased font-medium leading-relaxed text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
                            PHAN MINH QUANG
                        </p>
                        <p className="block pt-2 text-left font-sans text-2xl antialiased font-medium leading-relaxed bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
                            WEB DEVELOPER
                        </p>
                        <div className="block font-sans leading-relaxed">
                            <div>
                                <span className="font-bold">
                                    Date of birth:
                                </span>
                                27/05/2001
                            </div>
                            <div>
                                <span className="font-bold">From:</span> Hanoi,
                                Vietnam
                            </div>
                            <div>
                                <span className="font-bold">Technologies:</span>
                                HTML, CSS, SQL, PHP, Javascript, Tailwind,
                                Bootstrap
                            </div>
                            <div>
                                <span className="font-bold">Goal:</span> Aim to
                                be an aspiring web developer who can create
                                optimized, user-friendly web applications with
                                beautiful visuals
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center p-2 pt-4 pb-4 gap-7">
                        <a
                            target="_blank"
                            href="https://www.youtube.com/channel/UC5WFAjTQmwSVMj8ynLfukIg"
                            className="flex items-center justify-center bg-white transform hover:-translate-y-3 border-2 w-12 h-12 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl"
                        >
                            <i className="fab fa-youtube" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/QuangMphann"
                            className="flex items-center justify-center bg-white duration-500 border-2 border-blue-600 w-12 transform hover:-translate-y-3 h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600"
                        >
                            <i className="fab fa-facebook" />
                        </a>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/quangmphann/"
                            className="flex items-center justify-center border-2 hover:border-0 border-pink-500 bg-white hover:bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 hover:text-white text-pink-600 w-12 h-12 transform hover:-translate-y-3 rounded-full duration-500"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        <a
                            target="_blank"
                            href="https://github.com/QuangMphan"
                            className="flex items-center justify-center bg-white transform hover:-translate-y-3 border-2 w-12 h-12 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl"
                        >
                            <i className="fab fa-github" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
