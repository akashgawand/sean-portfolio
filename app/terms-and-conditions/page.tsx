import Link from "next/link";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#00c3ff] selection:text-white px-6 py-12 md:px-12 lg:px-24 md:py-20 lg:py-28">
      <div className=" max-w-[75rem] mx-auto w-full">
        
        {/* TERMS AND CONDITIONS SECTION */}
        <section className="mt-22 mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black uppercase tracking-[0.1rem] text-[#e0e0e0] drop-shadow-md mb-8">
            TERMS AND CONDITIONS
          </h1>
          <p className="text-[#a0a0a0] text-sm md:text-[15px] font-medium mb-10 tracking-wide">
            Effective Date: February 19, 2026
          </p>

          <div className="text-[13px] md:text-[15px] text-[#b0b0b0] leading-relaxed font-medium space-y-8 max-w-[65rem]">
            {/* 1. Agreement to Terms */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                These terms and conditions (&quot;Terms&quot;) govern your use of the websites <a href="https://www.seanbeaman.com" className="text-white hover:text-[#00c3ff] underline">www.seanbeaman.com</a> (the &quot;Site&quot;) and all related services, products, programs, events, and communications offered by Sean Beaman LLC doing business as Sean Beaman (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using the Site, purchasing our products or services, or opting in to receive our communications, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Site or our services.
              </p>
               <p>
                <span className="font-bold text-[#e0e0e0]">Business Name and DBA:</span> Our legal business name is Sean Beaman LLC. We operate and do business as &quot;Sean Beaman&quot; and our primary websites are <a href="https://www.seanbeaman.com" className="text-white hover:text-[#00c3ff] underline">www.seanbeaman.com</a>.
              </p>
            </div>

            {/* 2. Modifications to Terms */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">2. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting the revised Terms on the Site with an updated Effective Date. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
              </p>
            </div>

            {/* 3. Use of the Site */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">3. Use of the Site</h2>
              <p className="mb-4">
                You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site in any way that could damage, disable, overburden, or impair the Site or interfere with any other party&apos;s use of the Site. You agree not to attempt to gain unauthorized access to the Site, other accounts, computer systems, or networks connected to the Site.
              </p>
              <p>
                The Site may contain chat rooms, bulletin boards, web logs, message boards, and similar interactive features. You are solely responsible for any content you post to these interactive features. We reserve the right to remove any content that violates these Terms, is offensive, or is otherwise objectionable, at our sole discretion.
              </p>
            </div>

            {/* 4. Products, Services, and Events */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">4. Products, Services, and Events</h2>
              <p className="mb-4">
                We offer various coaching programs, courses, digital products, live events, and related services. All descriptions of products, services, and events are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product, service, or event at any time. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of any product, service, or event.
              </p>
              <p>
                Tickets and registrations for live events are subject to their own specific terms and conditions, which will be provided at the time of purchase.
              </p>
            </div>

            {/* 5. Purchases and Payment */}
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">5. Purchases and Payment</h2>
               <p className="mb-4">
                 If you wish to purchase any product or service made available through the Site, you may be asked to supply certain information relevant to your purchase, including your name, email, phone number, credit card number, billing address, and shipping information. You represent and warrant that you have the legal right to use any credit card(s) or other payment method(s) in connection with any purchase and that the information you supply to us is true, correct, and complete.
               </p>
               <p>
                All purchases are subject to our refund and cancellation policies, which may vary by product or service and will be provided at the time of purchase.
               </p>
            </div>

            {/* 6. Intellectual Property Rights */}
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">6. Intellectual Property Rights</h2>
               <p>
                The content on the Site, including but not limited to text, graphics, images, logos, video, audio, software, and the compilation thereof, is the property of Sean Beaman LLC or its content suppliers and is protected by Canadian, United States, and international copyright and trademark laws. Unauthorized use of any materials on the Site may violate copyright, trademark, and other applicable laws and could result in criminal or civil penalties.
               </p>
            </div>

            {/* 7. Digital Millennium Copyright Act (DMCA) */}
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">7. Digital Millennium Copyright Act (DMCA)</h2>
               <p className="mb-4">
                 We respect the intellectual property rights of others and expect our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (&quot;DMCA&quot;), we will respond to notices of alleged copyright infringement that comply with the DMCA and any other applicable laws.
               </p>
               <p className="mb-4">
                 If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible on the Site, please notify our copyright agent with the following information:
               </p>
               <ul className="list-disc pl-6 space-y-2 mb-4">
                 <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
                 <li>Identification of the copyrighted work claimed to have been infringed.</li>
                 <li>Identification of the material that is claimed to be infringing and where it is located on the Site.</li>
                 <li>Your address, telephone number, and email address.</li>
                 <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law.</li>
                 <li>A statement, made under penalty of perjury, that the above information is accurate and that you are the copyright owner or are authorized to act on behalf of the owner.</li>
               </ul>
               <p>
                 Copyright Agent Contact: <a href="mailto:support@seanbeaman.com" className="text-white hover:text-[#00c3ff] underline">support@seanbeaman.com</a>
               </p>
            </div>

            {/* 8. SMS Communications Program */}
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">8. SMS Communications Program</h2>
               
               <h3 className="text-lg font-bold text-white mb-2 mt-6">8.1 Program Description</h3>
               <p className="mb-4">
                 Sean Beaman SMS Communications is our SMS messaging program. By opting in, you agree to receive text messages from Sean Beaman LLC DBA Sean Beaman. Messages may include:
               </p>
               <ul className="list-disc pl-6 space-y-2 mb-4">
                 <li><span className="font-bold text-[#e0e0e0]">Transactional messages:</span> Order confirmations, account updates, appointment reminders, event logistics, and customer service communications.</li>
                 <li><span className="font-bold text-[#e0e0e0]">Promotional messages:</span> Special offers, new product or program announcements, event invitations, educational content, and marketing communications (sent only with your explicit prior consent).</li>
               </ul>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">8.2 Consent and Opt-In</h3>
               <p className="mb-4">
                 By providing your mobile phone number and opting in to our SMS program, you expressly consent to receive the types of messages described above. Consent to receive text messages is not a condition of purchasing any goods or services from us. You must be 18 years of age or older to participate in our SMS program.
               </p>
               <p className="mb-4">
                 Consent may be provided through any of the following methods: completing a web form on our Site, texting a keyword to our designated number, providing verbal consent at an event or over the phone, or checking an opt-in box during a purchase or registration process. By opting in, you confirm that the mobile phone number you have provided is your own and that you are authorized to receive text messages at that number.
               </p>
               <p>
                 We maintain complete records of your opt-in consent, including the date, time, source, and method of consent, in compliance with TCPA, CTIA, CASL, and carrier requirements. These records are retained for a minimum of five (5) years.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">8.3 Message Frequency and Timing</h3>
               <p className="mb-4">
                 Message frequency varies. You may receive up to a maximum of one (1) message per day, though typical frequency is approximately one (1) message per week, with up to three (3) messages per week during special events, promotions, or product launches.
               </p>
               <p>
                 In compliance with TCPA and CTIA guidelines, we will not send promotional or marketing text messages before 8:00 AM or after 9:00 PM in your local time zone. Transactional messages (such as order confirmations or urgent account notifications) may be sent outside these hours when reasonably necessary.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">8.4 Message and Data Rates</h3>
               <p>
                 Message and data rates may apply. Please contact your wireless carrier for details about your text messaging plan and any charges that may apply.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">8.5 Opt-Out / Stop</h3>
               <p className="mb-4">
                 You can cancel SMS messages at any time. To opt out, text &quot;STOP&quot; to the number from which you received a message. After sending STOP, you will receive one final confirmation message, and no further messages will be sent unless you re-opt in. Opt-out requests are processed immediately and are irreversible unless you choose to opt back in.
               </p>
               <p>
                 You may also opt out by contacting us directly at <a href="mailto:support@seanbeaman.com" className="text-white hover:text-[#00c3ff] underline">support@seanbeaman.com</a> and requesting removal from our SMS program.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">8.6 Opt Back In</h3>
               <p>
                 If you have previously opted out and wish to resume receiving text messages, you may opt back in at any time by texting &quot;START&quot; to our designated number or by completing a new opt-in form on our Site.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">8.7 Help</h3>
               <p>
                 For help or assistance with our SMS program, text &quot;HELP&quot; to the number from which you received a message. You may also email us at <a href="mailto:support@seanbeaman.com" className="text-white hover:text-[#00c3ff] underline">support@seanbeaman.com</a>.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">8.8 Supported Carriers</h3>
               <p>
                 Our SMS program is supported by major U.S. carriers, including but not limited to: AT&T, T-Mobile, Verizon, Sprint, Boost Mobile, Cricket Wireless, MetroPCS, and U.S. Cellular. Coverage is not available in all areas. Carriers are not liable for delayed or undelivered messages.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">8.9 SMS Privacy</h3>
               <p className="mb-4">
                 No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service and SMS delivery, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
               </p>
               <p>
                 For full details on how we collect, use, and protect your personal information including mobile data, please refer to our Privacy Policy at <a href="/terms-privacy" className="text-white hover:text-[#00c3ff] underline">www.seanbeaman.com/terms-privacy</a>.
               </p>
            </div>

            {/* 9. Regulatory Compliance */}
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">9. Regulatory Compliance</h2>
               
               <h3 className="text-lg font-bold text-white mb-2 mt-6">9.1 Telephone Consumer Protection Act (TCPA)</h3>
               <p>
                 Our SMS communications program operates in compliance with the Telephone Consumer Protection Act (47 U.S.C. § 227) and the regulations of the Federal Communications Commission (FCC). We obtain prior express written consent before sending any marketing text messages using an automatic telephone dialing system or prerecorded voice. We honor all opt-out requests promptly and maintain records of consent as required by the TCPA.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">9.2 CTIA Messaging Principles and Best Practices</h3>
               <p>
                 We adhere to the CTIA&apos;s Messaging Principles and Best Practices for compliance with wireless carrier requirements. This includes providing clear opt-in disclosures, honoring STOP requests, responding to HELP messages, disclosing message frequency and data rate information, maintaining quiet hours for promotional messaging, and ensuring all messaging content complies with carrier guidelines.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">9.3 A2P 10DLC Compliance</h3>
               <p>
                 Our SMS messaging campaigns are registered under the A2P 10DLC (Application-to-Person 10-Digit Long Code) framework as required by major U.S. carriers. Our brand, campaigns, and use cases are registered with The Campaign Registry (TCR) and comply with all applicable carrier trust and vetting requirements.
               </p>
               
               <h3 className="text-lg font-bold text-white mb-2 mt-6">9.4 Canada&apos;s Anti-Spam Legislation (CASL)</h3>
               <p>
                 For recipients located in Canada, our SMS and email communications comply with Canada&apos;s Anti-Spam Legislation (S.C. 2010, c. 23). We obtain express or implied consent as required by CASL, include sender identification and contact information in all messages, and provide a clear and functioning unsubscribe/opt-out mechanism. We maintain records of consent including when, where, and how consent was provided or revoked.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">9.5 State-Specific SMS Compliance</h3>
               <p>
                 In addition to federal regulations, we comply with applicable state-level SMS and telemarketing laws, including but not limited to Texas SB 140 (effective September 2025), which expanded the definition of &quot;telephone solicitation&quot; to include text messages with treble damages provisions, and Virginia SB 1339 (effective January 2026), which requires honoring text message opt-out requests. We monitor and comply with evolving state-specific requirements as they take effect.
               </p>

               <h3 className="text-lg font-bold text-white mb-2 mt-6">9.6 FCC Revoke-All Rule</h3>
               <p>
                 We are aware of the FCC&apos;s proposed &quot;revoke-all&quot; provision, which has been delayed to January 2027. While this rule is not yet in effect, our current opt-out processes are designed to comply with existing and forthcoming revocation requirements. When you send STOP, we immediately cease all messaging to your number.
               </p>
            </div>

            {/* 10. Disclaimer of Warranties */}
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">10. Disclaimer of Warranties</h2>
               <p className="mb-4 uppercase">
                 THE SITE AND ALL PRODUCTS, SERVICES, CONTENT, FUNCTIONS, AND INFORMATION MADE AVAILABLE ON OR ACCESSED THROUGH THE SITE ARE PROVIDED &quot;AS IS.&quot; TO THE FULLEST EXTENT PERMISSIBLE BY LAW, SEAN BEAMAN LLC. MAKES NO REPRESENTATION OR WARRANTIES OF ANY KIND WHATSOEVER FOR THE CONTENT ON THE SITE OR THE MATERIALS, INFORMATION, AND FUNCTIONS MADE ACCESSIBLE BY THE SOFTWARE USED ON OR ACCESSED THROUGH THE SITE, FOR ANY PRODUCTS OR SERVICES OR HYPERTEXT LINKS TO THIRD PARTIES, OR FOR ANY BREACH OF SECURITY ASSOCIATED WITH THE TRANSMISSION OF SENSITIVE INFORMATION THROUGH THE SITE OR ANY LINKED SITE.
               </p>
               <p className="uppercase">
                 WE DO NOT WARRANT THAT THE SITE, ITS SERVERS, OR EMAIL SENT FROM US ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT WARRANT THAT THE FUNCTIONS, FEATURES, OR CONTENT CONTAINED ON THE SITE WILL BE UNINTERRUPTED, TIMELY, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED. WE MAKE NO WARRANTIES OR REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE CONTENT OF THE SITE IN TERMS OF ITS CORRECTNESS, ACCURACY, TIMELINESS, RELIABILITY, OR OTHERWISE.
               </p>
            </div>

            {/* 11. Limitation of Liability */}
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">11. Limitation of Liability</h2>
               <p className="mb-4 uppercase">
                 UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL SEAN BEAMAN LLC. OR ANY OF ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SUCCESSORS, OR ASSIGNS, BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE SITE OR FOR THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES OR RESULTING FROM ANY GOODS OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH THE SITE. THESE LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.
               </p>
               <p className="uppercase">
                 BECAUSE SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES, OR LIMITATIONS OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THESE LIMITATIONS MAY NOT APPLY TO YOU.
               </p>
            </div>

            {/* 12. Indemnification */}
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">12. Indemnification</h2>
               <p>
                 You agree to indemnify, defend, and hold harmless Sean Beaman LLC and its officers, directors, employees, agents, licensors, suppliers, and any third-party information providers from and against all losses, expenses, damages, and costs, including reasonable attorneys&apos; fees, resulting from any violation of these Terms or any activity related to your use of the Site (including negligent or wrongful conduct).
               </p>
            </div>

            {/* 13. Governing Law and Dispute Resolution */}
            <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">13. Governing Law and Dispute Resolution</h2>
               <p className="mb-4">
                 These Terms shall be governed by and construed in accordance with the laws of the Province of British Columbia, Canada, without giving effect to any principles of conflicts of law. Any disputes arising out of or relating to these Terms or your use of the Site shall be resolved exclusively in the courts of British Columbia, Canada, and you consent to the personal jurisdiction of such courts.
               </p>
               <p>
                 For users located in the United States, to the fullest extent permitted by applicable law, you agree to resolve any disputes through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law. Nothing in this section shall prevent either party from seeking injunctive or other equitable relief in a court of competent jurisdiction.
               </p>
            </div>

            {/* 14. Severability */}
             <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">14. Severability</h2>
               <p>
                If any provision of these Terms is found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.
               </p>
             </div>

             {/* 15. Entire Agreement */}
             <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">15. Entire Agreement</h2>
               <p>
                 These Terms, together with our Privacy Policy (available at <a href="/terms-privacy" className="text-white hover:text-[#00c3ff] underline">www.seanbeaman.com/terms-privacy</a>), constitute the entire agreement between you and Sean Beaman LLC regarding your use of the Site and supersede all prior agreements, understandings, and communications, whether written or oral.
               </p>
             </div>

             {/* 16. No Waiver */}
             <div>
               <h2 className="text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4">16. No Waiver</h2>
               <p>
                 Our failure to enforce any right or provision of these Terms shall not be considered a waiver of such right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Sean Beaman LLC.
               </p>
             </div>
          </div>
        </section>

         {/* CONTACT INFORMATION */}
         <section className="pb-16 border-t border-gray-800 pt-16">
          <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold tracking-[0.05rem] text-[#e0e0e0] drop-shadow-md mb-6">
            17. Contact Information
          </h2>
          <div className="text-[13px] md:text-[15px] text-[#b0b0b0] leading-relaxed font-medium space-y-2 max-w-[65rem]">
            <p className="font-bold text-white mb-4">Sean Beaman LLC</p>
            <p>DBA Sean Beaman</p>
            <p>123 Example Street</p> {/* Placeholder like previous doc */}
            <p>New York, NY 10001</p>
            <p>USA</p>
            
            <p className="pt-4">Email: <a href="mailto:support@seanbeaman.com" className="text-white hover:text-[#00c3ff] underline">support@seanbeaman.com</a></p>
            <p>Website: <a href="https://www.seanbeaman.com" className="text-white hover:text-[#00c3ff] underline">www.seanbeaman.com</a></p>
          </div>
        </section>
      </div>
    </main>
  );
}
