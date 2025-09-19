import { DarkGradientBg } from "./elegant-dark-pattern.jsx"

export default function DemoElegantDarkPattern() {
  return (
    <DarkGradientBg>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-6 p-8">
          <h1 className="text-4xl font-bold text-white">Dark Gradient Background</h1>
          <p className="text-lg text-gray-300 max-w-md">
            A clean, dark gradient background with subtle patterns and textures.
          </p>
        </div>
      </div>
    </DarkGradientBg>
  )
}
