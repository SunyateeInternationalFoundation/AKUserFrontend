import React from "react"
import { Mail, Phone, MessageCircle, FileQuestion, ExternalLink } from "lucide-react"

const HelpSupport = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Help & Support</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-blue-600" />
              <a href="mailto:ausumkids@admin.com" className="text-blue-600 hover:underline">
                ausumkids@admin.com
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-blue-600" />
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                +91 (975) 567-890
              </a>
            </li>
            <li className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-3 text-blue-600" />
              <span>Live chat available 9 AM - 5 PM IST</span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FileQuestion className="w-4 h-4 mr-2" />
                How do I update my child's profile?
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FileQuestion className="w-4 h-4 mr-2" />
                What types of therapies do you offer?
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FileQuestion className="w-4 h-4 mr-2" />
                How can I reschedule a therapy session?
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FileQuestion className="w-4 h-4 mr-2" />
                What is your cancellation policy?
              </a>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Helpful Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Parent's Guide to Therapy Sessions
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Understanding Your Child's Progress Reports
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Tips for Supporting Your Child's Therapy at Home
              </a>
            </li>
          </ul>
        </section>
      </div>

      <section className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Need More Help?</h2>
        <p className="mb-4">
          If you can't find the answer you're looking for, our support team is always ready to assist you.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Contact Support
        </button>
      </section>
    </div>
  )
}

export default HelpSupport

