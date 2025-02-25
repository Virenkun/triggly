export default function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto p-4">
      {/* Free Tier */}
      <div className="rounded-2xl bg-gray-50/5 dark:bg-gray-900/50 backdrop-blur-xl p-8 border border-gray-200/10">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold dark:text-white">Free</h2>
          <p className="text-xl font-medium dark:text-gray-200">
            Essential features for individual users
          </p>
          <div className="pt-4">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold dark:text-white">$</span>
              <span className="text-7xl font-bold dark:text-white">0</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Lifetime</p>
            <p className="text-gray-600 dark:text-gray-400">
              No credit card required
            </p>
          </div>
          <div className="pt-4">
            <button className="w-full bg-white dark:text-black dark:bg-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-gray-100 dark:hover:bg-neutral-200 transition-colors">
              Get started for free
            </button>
          </div>
        </div>
      </div>

      {/* Premium Tier */}
      <div className="rounded-2xl bg-purple-50/5 dark:bg-purple-900/20 backdrop-blur-xl p-8 border border-purple-200/10">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold dark:text-white">Premium</h2>
          <p className="text-xl font-medium dark:text-gray-200">
            Enhance team productivity and coordination
          </p>
          <div className="pt-4">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold dark:text-white">$</span>
              <span className="text-7xl font-bold dark:text-white">9</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">per month</p>
            <p className="text-gray-600 dark:text-gray-400">
              Billed annually at $348 USD
            </p>
          </div>
          <div className="pt-4">
            <button className="w-full bg-white dark:bg-purple-500 text-black dark:text-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-gray-100 dark:hover:bg-purple-600 transition-colors">
              Buy RepliAI Premium
            </button>
          </div>
        </div>
      </div>

      {/* Ultimate Tier */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-50/5 via-purple-900/20 to-pink-900/20 backdrop-blur-xl p-8 border border-pink-200/10 rounded-br-[4rem]">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold dark:text-white">Ultimate</h2>
          <p className="text-xl font-medium dark:text-gray-200">
            Organization-wide security, compliance, and planning
          </p>
          <div className="pt-4">
            <div className="flex items-baseline">
              <span className="text-5xl font-bold dark:text-white">$</span>
              <span className="text-7xl font-bold dark:text-white">29</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">per month</p>
            <p className="text-gray-600 dark:text-gray-400">
              Billed annually at $1188 USD
            </p>
          </div>
          <div className="pt-4 space-y-3 ">
            <button className="w-full bg-white dark:bg-green-600 text-black dark:text-white rounded-lg px-6 py-3 text-lg font-semibold hover:bg-gray-100 dark:hover:bg-green-700 transition-colors">
              Buy ReplAI Ultimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
