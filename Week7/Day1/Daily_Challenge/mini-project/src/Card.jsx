import rocket from './assets/rocket.svg';
import lightning from './assets/lightning.svg';
import mobile from './assets/mobile.svg';

function Card() {
    const features = [
        {
            icon: rocket,
            title: 'Fast Performance',
            description: 'Our landing page loads quickly and runs smoothly across all devices.'
        },
        {
            icon: lightning,
            title: 'Easy to Use',
            description: 'Our landing page is simple and intuitive for users to navigate.'
        },
        {
            icon: mobile,
            title: 'Modern Design',
            description: 'Our landing page features a clean, modern, and responsive design.'
        }
    ];

    return (
        <div className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Build a Responsive Landing Page with React
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    A mini project to practice creating a polished, responsive landing page with reusable components.
                </p>

                <div className="mt-8 flex justify-center">
                    <button className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-orange-600">
                        Get Started
                    </button>
                </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
                            <img src={feature.icon} alt={feature.title} className="h-8 w-8" />
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-gray-900">{feature.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;