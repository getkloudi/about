import React from "react";
import { Helmet as Head } from "react-helmet";
import Footer from "../../components/footer/Footer";
import HomepageToolbar from "../../components/toolbar/HomepageToolbar";
import "../../scss/terms-of-service.scss";
export default function PrivacyPolicy() {
  return (
    <div className="terms-of-service-page">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Terms of Service - Kloudi</title>
      </Head>
      <HomepageToolbar pricingVisibility={false} />
      <div className="terms-of-service">
        <p className="column center">
          <h1>Terms of Service&#13;</h1>
          Effective as of September 1, 2019
        </p>
        <p className="column">
          This Kloudi Online Customer Agreement (“Agreement“) is entered into by
          and between Kloudi.tech (“Kloudi“) and the entity or person placing an
          order for or accessing the Service (“Customer“ or “you“). This
          Agreement consists of the terms and conditions set forth below and any
          Kloudi ordering documents, online registration, order descriptions or
          order confirmations referencing this Agreement (“Order Forms“). If you
          are accessing or using the Service on behalf of your company, you
          represent that you are authorised to accept this Agreement on behalf
          of your company, and all references to “you” or “Customer” reference
          your company. The “Effective Date“ of this Agreement is the date which
          is the earlier of (a) Customer’s initial access to the Service (as
          defined below) through any online provisioning, registration or order
          process or (b) the effective date of the first Order Form referencing
          this Agreement. This Agreement will govern Customer’s initial purchase
          on the Effective Date as well as any future purchases made by Customer
          that reference this Agreement.
        </p>
        <p className="column">
          <h3>Modifications</h3>
          You acknowledge and agree that Kloudi may modify the terms and
          conditions of this Agreement at any time in accordance with Section 12
          (Modifications to Agreement). BY INDICATING YOUR ACCEPTANCE OF THIS
          AGREEMENT OR ACCESSING OR USING THE SERVICE, YOU ARE AGREEING TO BE
          BOUND BY ALL TERMS, CONDITIONS, AND NOTICES CONTAINED OR REFERENCED IN
          THIS AGREEMENT. IF YOU DO NOT AGREE TO THIS AGREEMENT, PLEASE DO NOT
          USE THE SERVICE. FOR CLARITY, EACH PARTY EXPRESSLY AGREES THAT THIS
          AGREEMENT IS LEGALLY BINDING UPON IT.
        </p>
        <p className="column">
          <h2>1. Kloudi SERVICE</h2>
          <h3>1.1. Overview</h3>The Service acts as a central hub for Customer
          Data, allowing Customer to collect Customer Data from its selected
          sources (“Sources“), such as its own or third-party websites or
          properties, and send the Customer Data to Customer’s chosen
          destinations (“Destinations“), such as Customer’s databases or its
          accounts with third-party applications or services, for Customer’s
          further use. The supported Sources and Destinations are identified in
          the Documentation. As further described below and in the
          Documentation, Customer maintains control over which Sources and
          Destinations it uses with the Service, as well as the types and
          content of Customer Data it shares between its Sources and
          Destinations.
        </p>
        <p className="column">
          <h3> 1.2. Kloudi Code</h3>
          For Sources owned or controlled by Customer (“Customer Properties“),
          Customer will enable the collection of Customer Data by implementing
          Kloudi’s JavaScript, SDK or other code (“Kloudi Code“) on the Customer
          Properties.
        </p>
        <p className="column">
          <h3>1.3. Definitions</h3>
          “Customer Data“ means any data that Customer submits to the Service,
          including data that it collects from Customer Properties or retrieves
          from other Sources through the Service. “Documentation“ means the end
          user technical documentation provided with the Service, as may be
          modified from time to time. “Laws“ means all applicable local, state,
          federal and international laws, regulations and conventions,
          including, without limitation, those related to data privacy and data
          transfer, international communications, and the exportation of
          technical or personal data. “Order Form“ is defined above. “Sensitive
          Personal Information“ means any of the following: (i) credit, debit or
          other payment card data subject to the Payment Card Industry Data
          Security Standards (“PCI DSS“); (ii) patient, medical or other
          protected health information regulated by the Health Insurance
          Portability and Accountability Act (“HIPAA“); (iii) any information
          deemed to be “special categories of data” of an EU resident (prior to
          May 25, 2018, as such term is defined in EU Data Protection Directive
          95/46/EC; and on and after May 25, 2018, as defined in European Union
          Regulation 2016/679) or (iv) any other personal or sensitive
          information subject to regulation or protection under the
          Gramm-Leach-Bliley Act, Children’s Online Privacy Protection Act or
          other Laws. “Service“ means the specific Kloudi proprietary hosted
          service solution(s) specified on an Order Form, including the Kloudi
          dashboard and any related Kloudi Code and API(s).
        </p>
        <p className="column">
          <h3>1.4. Access to the Service</h3>
          Customer may access and use the Service for its internal business
          operations, subject to this Agreement (including Section 2 (Service
          Plans and Beta Releases)), the Documentation, and any scope of use
          restrictions on the applicable Order Form. This includes the right to
          implement Kloudi Code on Customer Properties in order to collect
          Customer Data for use with the Service. Access to the Service is
          limited to Customer’s employees and contractors acting for the sole
          benefit of Customer (“Permitted Users“). Customer and its Permitted
          Users may need to register for a Kloudi account in order to access or
          use the Service. Account registration information must be accurate,
          current and complete, and will be governed by Kloudi’s Privacy Policy
          . Customer is responsible for any use of the Service by its Permitted
          Users and their compliance with this Agreement. Customer shall keep
          confidential its user IDs and passwords for the Service and remain
          responsible for any actions taken through its accounts.
        </p>
        <p className="column">
          <h3>1.5. Use Restrictions</h3>
          Customer shall not (and shall not permit any third party to): (a)
          rent, lease, provide access to or sublicense the Service to a third
          party; (b) use the Service to provide, or incorporate the Service
          into, any product or service provided to a third party; (c) use or
          attempt to use the Service for competitive analysis or benchmarking;
          (d) reverse engineer, decompile, disassemble, or otherwise seek to
          obtain the source code or non-public APIs to the Service, except to
          the extent expressly permitted by applicable law (and then only upon
          advance notice to Kloudi); (e) copy, modify or create any derivative
          work of the Service or any Documentation; (f) remove or obscure any
          proprietary or other notices contained in the Service (including any
          reports or data printed from the Service); or (g) publicly disseminate
          information regarding the performance of the Service. 1.6. Storage and
          Processing of Customer Data Kloudi may store certain Customer Data
          submitted from Sources to enable various features and functionality of
          the Service. Customer acknowledges that Customer Data transmitted
          through the Service may be stored and processed by Kloudi in the India
          or in other countries in which Kloudi or its subcontractors maintain
          facilities.
        </p>
        <p className="column">
          <h2> 2. SERVICE PLANS AND BETA RELEASES</h2>
          <h3>2.1. Service Plans</h3>
          Kloudi makes available the Service through a “Free Plan” and paid
          plans (“Premium Plans“). Current plans are described
          at https://kloudi.tech/** **and Customer’s specific plan will be
          identified in the Order Form presented when Customer registers, orders
          or pays for the Service. Customer’s permitted scope of use – such as
          integration available, permitted number of queries and other usage
          limits – depends on the plan that Customer selects and will be
          specified on the applicable Order Form.
        </p>
        <p className="column">
          <h3>2.2. Paid Plans</h3>
          {`Paid Plans are provided on a subscription basis for a set term
          designated on the Order Form (each, a “Subscription Term“). Unless
          otherwise specified on the applicable Order Form, each Subscription
          Term shall automatically renew for the same period as the then-current
          Subscription Term unless either party gives the other written notice
          of termination at least thirty (30) days prior to expiration of the
          then-current Subscription Term (e.g., monthly Paid Plans will
          automatically roll over month-to-month).`}
        </p>
        <p className="column">
          <h3>2.3. Developer Plans and Trial Plans</h3>
          {`(a) Free Plans. If Customer receives access to the Service through a
          Free Plan, then Customer may use the Service in accordance with the
          terms and conditions of this Agreement for so long as Kloudi chooses
          to offer the Developer Plan. (b) Special Terms. Free Plans may not
          include all features or functionality offered as part of Paid Plans,
          and Kloudi reserves the right to add or subtract any features or
          functionality at any time for such plans. Kloudi has the right to
          suspend or terminate a at any time for any reason.`}
        </p>
        <p className="column">
          <h3>2.4. Beta Releases</h3>
          {`From time to time, Kloudi may grant Customer access to “alpha”,
          “beta”, or other early-stage products (“Beta Releases“). While Kloudi
          may provide assistance with Beta Releases in its discretion,
          notwithstanding anything to the contrary in this Agreement, CUSTOMER
          AGREES THAT ANY BETA RELEASE IS PROVIDED ON AN “AS IS” AND “AS
          AVAILABLE” BASIS. CUSTOMER FURTHER ACKNOWLEDGES AND AGREES THAT BETA
          RELEASES MAY NOT BE COMPLETE OR FULLY FUNCTIONAL AND MAY CONTAIN BUGS,
          ERRORS, OMISSIONS, AND OTHER PROBLEMS FOR WHICH Kloudi WILL NOT BE
          RESPONSIBLE. ACCORDINGLY, ANY USE OF A BETA RELEASE IS AT CUSTOMER’S
          SOLE RISK. Kloudi makes no promises that future versions of a Beta
          Release will be released. Kloudi may terminate Customer’s right to use
          any Beta Release at any time for any reason or no reason in Kloudi’s
          sole discretion, without liability.`}
        </p>
        <p className="column">
          <h2> 3. FEES AND PAYMENT</h2>
          <h3>3.1. Fees and Payment</h3>
          All fees for Paid Plans are as set forth in the applicable Order Form
          and shall be paid by Customer in accordance with the payment terms set
          forth in the Order Form. If no payment terms are specified in the
          Order Form, then the following default terms apply: (i) for monthly
          Paid Plans, Customer will pay all fees at the end of the month. Except
          as expressly set forth in Section 12 (Modifications to Agreement), all
          fees are non-refundable. Kloudi reserves the right to increase the
          rates specified in the Order Form upon any renewal of a Subscription
          Term. Customer is required to pay any sales, use, GST, value-added,
          withholding, or similar taxes or levies, whether domestic or foreign,
          other than taxes based on the income of Kloudi. Any late payments
          shall be subject to a service charge equal to 1.5% per month of the
          amount due or the maximum amount allowed by law, whichever is less.
        </p>

        <p className="column">
          <h3>3.2. Overages</h3>
          If Customer exceeds its permitted usage in any month of a Subscription
          Term as specified in an Order Form, Kloudi reserves the right to
          charge overage fees in respect of such excess usage at the applicable
          overage rates set forth in the Order Form. Customer will pay any
          overage fees monthly in arrears.
        </p>
        <p className="column">
          <h2>4. CUSTOMER OBLIGATIONS</h2>
          <h3>4.1. Data Collection</h3>
          Subject to this Agreement and as further described in the
          Documentation, Customer may configure the Customer Data elements to be
          collected from Sources and shared with different Destinations. In some
          instances, as referenced in the Service dashboard and Documentation,
          enabling a third-party Source involves implementing the third-party
          provider’s own SDK or code on Customer Properties. As a result, in
          these cases, certain default data designated by that Source’s provider
          may be sent directly to Customer’s accounts with that Source, rather
          than passing through the Service.
        </p>
        <p className="column">
          <h3>4.2. Rights in Customer Data</h3>
          Customer is solely responsible for the accuracy, content and legality
          of all Customer Data and agrees to comply with all applicable Laws in
          its use of the Service. Customer represents and warrants to Kloudi
          that Customer has all necessary rights, consents and permissions to
          collect, share and use Customer Data as contemplated in this Agreement
          (including granting Kloudi the rights in Section 6.1), without
          violation or infringement of (i) any third party intellectual
          property, publicity, privacy or other rights, (ii) any Laws, or (iii)
          any terms of service, privacy policies or other agreement governing
          the Customer Properties or Customer’s accounts with third-party
          Sources or Destinations. By enabling use of the Service with any
          Source or Destination, Customer authorizes Kloudi to access Customer’s
          accounts with such Source or Destination for the purposes described in
          this Agreement. Kloudi may also disclose that Customer is a customer
          of Kloudi and related technical Service data to providers of
          third-party Sources and Destinations used by Customer with the
          Service.
        </p>
        <p className="column">
          <h3>4.3. No Sensitive Personal Information</h3>
          Customer specifically agrees not to use the Service to collect, store,
          process or transmit any Sensitive Personal Information. Customer
          acknowledges that Kloudi is not a Business Associate or subcontractor
          (as those terms are defined in HIPAA) or a payment card processor and
          that the Service is neither HIPAA nor PCI DSS compliant. Kloudi shall
          have no liability under this Agreement for Sensitive Personal
          Information, notwithstanding anything to the contrary herein.
        </p>
        <p className="column">
          <h3>4.4. Indemnification by Customer</h3>
          Customer shall indemnify, defend and hold harmless Kloudi from and
          against any and all claims, costs, damages, losses, liabilities and
          expenses (including reasonable attorneys’ fees and costs) arising out
          of or in connection with any claim arising from or relating to any
          Customer Data or breach or alleged breach by Customer of Sections 4.2
          (Rights in Customer Data) or 4.3 (No Sensitive Personal Information).
          This indemnification obligation is subject to Customer receiving (i)
          prompt written notice of such claim (but in any event notice in
          sufficient time for Customer to respond without prejudice); (ii) the
          exclusive right to control and direct the investigation, defense, or
          settlement of such claim; and (iii) all necessary cooperation of
          Kloudi at Customer’s expense.
        </p>
        <p className="column">
          <h2>5. SECURITY</h2>
          Kloudi agrees to use commercially reasonable technical and
          organizational measures designed to prevent unauthorized access, use,
          alteration or disclosure of the Service or Customer Data. However,
          Kloudi shall have no responsibility for errors in transmission,
          unauthorized third-party access or other causes beyond Kloudi’s
          control.
        </p>
        <p className="column">
          <h2>6. OWNERSHIP</h2>
          <h3>6.1. Customer Data</h3>
          As between the parties, Customer shall retain all right, title and
          interest (including any and all intellectual property rights) in and
          to the Customer Data as provided to Kloudi. Subject to the terms of
          this Agreement, Customer hereby grants to Kloudi a non-exclusive,
          worldwide, royalty-free right to use, copy, store, transmit, modify,
          create derivative works of and display the Customer Data solely to the
          extent necessary to provide the Service to Customer.
        </p>
        <p className="column">
          <h3>6.2. Kloudi Technology</h3>
          This is a subscription agreement for access to and use of the Service.
          Customer agrees that Kloudi or its suppliers retain all right, title
          and interest (including all patent, copyright, trademark, trade secret
          and other intellectual property rights) in and to the Service, all
          Documentation, and any and all related and underlying technology and
          documentation and any derivative works, modifications or improvements
          of any of the foregoing, including as may incorporate Feedback (as
          defined below). Except as expressly set forth in this Agreement, no
          rights in the Service or any Kloudi technology are granted to
          Customer.
        </p>
        <p className="column">
          <h3>6.3. Feedback</h3>
          Customer, from time to time, may submit comments, questions,
          suggestions or other feedback relating to any Kloudi product or
          service to Kloudi (“Feedback“). Kloudi may freely use or exploit
          Feedback in connection with any of its products or services.
        </p>
        <p className="column">
          <h3>6.4. Aggregated Anonymous Data</h3>
          Notwithstanding anything to the contrary herein, Customer agrees that
          Kloudi may obtain and aggregate technical and other data about
          Customer’s use of the Service that is non-personally identifiable with
          respect to Customer (“Aggregated Anonymous Data“), and Kloudi may use
          the Aggregated Anonymous Data to analyze, improve, support and operate
          the Service and for distribution in general benchmarking data and
          industry reports. For clarity, this Section 6.4 does not give Kloudi
          the right to identify Customer as the source of any Aggregated
          Anonymous Data.
        </p>
        <p className="column">
          <h2>7. TERM AND TERMINATION</h2>
          <h3>7.1. Term</h3>
          This Agreement is effective as of the Effective Date and will continue
          until terminated.
        </p>
        <p className="column">
          <h3>7.2. Termination for Cause</h3>
          Either party may terminate this Agreement (including all related Order
          Forms) if the other party (a) fails to cure any material breach of
          this Agreement (including a failure to pay fees or comply with
          applicable scope of use restrictions) within thirty (30) days after
          written notice; (b) ceases operation without a successor; or (c) seeks
          protection under any bankruptcy, receivership, trust deed, creditors’
          arrangement, composition, or comparable proceeding, or if any such
          proceeding is instituted against that party (and not dismissed within
          sixty (60) days thereafter). For clarity, nothing in this Section 7.2
          limits Kloudi’s right to terminate or suspend any Free Plan as set
          forth in Section 2.3.
        </p>
        <p className="column">
          <h3>7.3. Effect of Termination</h3>
          Upon any expiration or termination of this Agreement, Customer shall
          immediately cease any and all use of and access to the Service
          (including any and all related Kloudi technology), cease distributing
          any Kloudi Code installed on Customer Properties, and delete (or, at
          Kloudi’s request, return) any and all copies of the Documentation, any
          Kloudi passwords or access codes and any other Kloudi Confidential
          Information in its possession. Customer acknowledges that following
          termination it shall have no further access to any Customer Data in
          the Service, and that Kloudi may delete any such data as may have been
          stored by Kloudi at any time. Except where an exclusive remedy is
          specified, the exercise of either party of any remedy under this
          Agreement, including termination, will be without prejudice to any
          other remedies it may have under this Agreement, by law or otherwise.
        </p>
        <p className="column">
          <h3>7.4. Suspension of Service</h3>
          In addition to Kloudi’s termination and other rights under this
          Agreement, Kloudi reserves the right to suspend Customer’s access to
          the Service (and any related services), in whole or in part, without
          liability to Customer and with immediate effect: (i) if Customer’s
          account is thirty (30) days or more overdue; (ii) if Customer exceeds
          any scope of use restrictions set forth in the applicable Order Form;
          (iii) if Customer has breached its express obligations under Sections
          1.5 (Use Restrictions) or 4 (Customer Obligations); or (iv) to prevent
          harm to the Service or other Kloudi customers.
        </p>
        <p className="column">
          <h3>7.5. Survival</h3>
          The following Sections shall survive any expiration or termination of
          this Agreement: 1.5 (Use Restrictions), the disclaimers in Section 2.4
          (Beta Releases), 3 (Fees and Payment), 4.4 (Indemnification by
          Customer), 6 (Ownership), 7 (Term and Termination; Suspension), 8
          (Warranty Disclaimer), 9 (Limitation of Remedies and Damages), 10
          (Confidential Information), 12 (Modifications to Agreement) and 13
          (General Terms).
        </p>
        <p className="column">
          <h2>8. WARRANTY DISCLAIMER</h2>
          THE SERVICE AND ALL RELATED SERVICES ARE PROVIDED “AS IS”. NEITHER
          Kloudi NOR ITS SUPPLIERS MAKES ANY OTHER WARRANTIES, EXPRESS OR
          IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO
          WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE
          OR NON INFRINGEMENT. Kloudi DOES NOT WARRANT THAT CUSTOMER’S USE OF
          THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, NOR DOES Kloudi
          WARRANT THAT IT WILL REVIEW THE CUSTOMER DATA FOR ACCURACY OR THAT IT
          WILL PRESERVE OR MAINTAIN THE CUSTOMER DATA WITHOUT LOSS. CUSTOMER
          UNDERSTANDS THAT CUSTOMER DATA IS SHARED WITH DESTINATIONS AT
          CUSTOMER’S ELECTION AND Kloudi TAKES NO RESPONSIBILITY FOR ANY
          DESTINATION’S USE OR PROTECTION OF CUSTOMER DATA ONCE IT HAS BEEN
          SHARED. Kloudi SHALL NOT BE LIABLE FOR DELAYS, INTERRUPTIONS, SERVICE
          FAILURES OR OTHER PROBLEMS INHERENT IN USE OF THE INTERNET AND
          ELECTRONIC COMMUNICATIONS OR OTHER SYSTEMS OUTSIDE THE REASONABLE
          CONTROL OF Kloudi. CUSTOMER MAY HAVE OTHER STATUTORY RIGHTS, BUT THE
          DURATION OF STATUTORILY REQUIRED WARRANTIES, IF ANY, SHALL BE LIMITED
          TO THE SHORTEST PERIOD PERMITTED BY LAW.
        </p>
        <p className="column">
          <h2>9. LIMITATION OF REMEDIES AND DAMAGES</h2>
          <h3>9.1. Consequential Damages Waiver</h3>
          EXCEPT FOR EXCLUDED CLAIMS (DEFINED BELOW), NEITHER PARTY (NOR ITS
          SUPPLIERS) SHALL HAVE ANY LIABILITY ARISING OUT OF OR RELATED TO THIS
          AGREEMENT FOR ANY LOSS OF USE, LOST DATA, LOST PROFITS, FAILURE OF
          SECURITY MECHANISMS, INTERRUPTION OF BUSINESS, OR ANY INDIRECT,
          SPECIAL, INCIDENTAL, RELIANCE, OR CONSEQUENTIAL DAMAGES OF ANY KIND,
          EVEN IF INFORMED OF THE POSSIBILITY OF SUCH DAMAGES IN ADVANCE.
        </p>
        <p className="column">
          <h3>9.2. Liability Cap</h3>
          Kloudi’S (AND ITS SUPPLIERS’) ENTIRE LIABILITY TO CUSTOMER ARISING OUT
          OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE AMOUNT ACTUALLY
          PAID OR PAYABLE BY CUSTOMER TO Kloudi DURING THE PRIOR TWELVE (12)
          MONTHS UNDER THIS AGREEMENT.
        </p>
        <p className="column">
          <h3>9.3. Excluded Claims</h3>
          “Excluded Claims“ means (a) any claim arising from Customer’s breach
          of Section 1.5 (Use Restrictions); or (b) any claim arising under
          Section 4 (Customer Obligations).
        </p>
        <p className="column">
          <h3>9.4. Nature of Claims and Failure of Essential Purpose</h3>
          The parties agree that the waivers and limitations specified in this
          Section 9 apply regardless of the form of action, whether in contact,
          tort (including negligence), strict liability or otherwise and will
          survive and apply even if any limited remedy specified in this
          Agreement is found to have failed of its essential purpose.
        </p>
        <p className="column">
          <h2>10. CONFIDENTIAL INFORMATION</h2>
          Each party (as “Receiving Party“) agrees that all code, inventions,
          know-how, business, technical and financial information it obtains
          from the disclosing party (“Disclosing Party“) constitute the
          confidential property of the Disclosing Party (“Confidential
          Information“), provided that it is identified as confidential at the
          time of disclosure or should be reasonably known by the Receiving
          Party to be confidential or proprietary due to the nature of the
          information disclosed and the circumstances surrounding the
          disclosure. Any Kloudi technology, performance information relating to
          the Service, and the terms and conditions of this Agreement shall be
          deemed Confidential Information of Kloudi without any marking or
          further designation. Except as expressly authorized herein, the
          Receiving Party shall (1) hold in confidence and not disclose any
          Confidential Information to third parties and (2) not use Confidential
          Information for any purpose other than fulfilling its obligations and
          exercising its rights under this Agreement. The Receiving Party may
          disclose Confidential Information to its employees, agents,
          contractors and other representatives having a legitimate need to know
          (including, for Kloudi, the subcontractors referenced in Section
          13.10), provided that such representatives are bound to
          confidentiality obligations no less protective of the Disclosing Party
          than this Section 10 and that the Receiving Party remains responsible
          for compliance by any such representative with the terms of this
          Section 10. The Receiving Party’s confidentiality obligations shall
          not apply to information that the Receiving Party can document: (i)
          was rightfully in its possession or known to it prior to receipt of
          the Confidential Information; (ii) is or has become public knowledge
          through no fault of the Receiving Party; (iii) is rightfully obtained
          by the Receiving Party from a third party without breach of any
          confidentiality obligation; or (iv) is independently developed by
          employees of the Receiving Party who had no access to such
          information. The Receiving Party may make disclosures to the extent
          required by law or court order, provided the Receiving Party notifies
          the Disclosing Party in advance and cooperates in any effort to obtain
          confidential treatment. The Receiving Party acknowledges that
          disclosure of Confidential Information would cause substantial harm
          for which damages alone would not be a sufficient remedy, and
          therefore that upon any such disclosure by the Receiving Party the
          Disclosing Party shall be entitled to seek appropriate equitable
          relief in addition to whatever other remedies it might have at law.
        </p>
        <p className="column">
          <h2>11. CO-MARKETING</h2>
          Customer agrees to participate in reasonable marketing activities that
          promote the benefits of the Service to other potential customers and
          to use of Customer’s name and logo on Kloudi’s web site and in Kloudi
          promotional materials.** **Customer agrees that Kloudi may disclose
          Customer as a customer of Kloudi.
        </p>
        <p className="column">
          <h2>12. MODIFICATIONS TO AGREEMENT</h2>
          Kloudi may modify the terms and conditions of this Agreement
          (including Service pricing and plans) from time to time, with notice
          given to Customer by email or through the Service. If Customer has a
          Premium Plan or a Free Plan, then any modifications will become
          effective immediately, and if Customer disagrees with the
          modifications, Customer’s exclusive remedy is to terminate this
          Agreement and cease using the Service. If Customer has a Paid Plan,
          Customer must notify Kloudi within thirty (30) days of notice of the
          modifications that Customer does not agree to such changes, and Kloudi
          (at its option and as Customer’s exclusive remedy) may either: (a)
          permit Customer to continue under the prior version of this Agreement
          until expiration of the then-current Subscription Term (after which
          time the modified Agreement will apply) or (b) allow Customer to
          terminate this Agreement and receive a pro-rated refund of any fees
          Customer has pre-paid for use of the Service for the terminated
          portion of the applicable Subscription Term. Upon any changes to this
          Agreement, Customer may be required to click to agree to the modified
          Agreement in order to continue using the Service, and in any event
          continued use of the Service after the modifications take effect
          constitutes Customer’s acceptance of the modifications.
        </p>
        <p className="column">
          <h2>13. GENERAL TERMS</h2>
          <h3>13.1. Assignment</h3>
          This Agreement will bind and inure to the benefit of each party’s
          permitted successors and assigns. Neither party may assign this
          Agreement without the advance written consent of the other party,
          except that Kloudi may assign this Agreement in connection with a
          merger, reorganization, acquisition or other transfer of all or
          substantially all of Kloudi’s assets or voting securities. Any attempt
          to transfer or assign this Agreement except as expressly authorized
          under this Section 13.1 will be null and void.
        </p>
        <p className="column">
          <h3>13.2. Severability</h3>
          If any provision of this Agreement shall be adjudged by any court of
          competent jurisdiction to be unenforceable or invalid, that provision
          shall be limited to the minimum extent necessary so that this
          Agreement shall otherwise remain in effect.
        </p>
        <p className="column">
          <h3>13.3. Governing Law; Jurisdiction and Venue</h3>
          This Agreement shall be governed by the laws of the State of Karnataka
          and India without regard to conflicts of laws provisions thereof, and
          without regard to the United Nations Convention on the International
          Sale of Goods. The jurisdiction and venue for actions related to the
          subject matter hereof shall be the courts located in Bangalore,
          Karnataka and both parties hereby submit to the personal jurisdiction
          of such courts.
        </p>
        <p className="column">
          <h3>13.4. Attorneys’ Fees and Costs </h3>
          The prevailing party in any action to enforce this Agreement will be
          entitled to recover its attorneys’ fees and costs in connection with
          such action.
        </p>
        <p className="column">
          <h3>13.5. Notice </h3>
          Any notice or communication to Kloudi that is required or permitted
          under this Agreement shall be in writing to Kloudi at the address set
          forth in Section 13.6 (Kloudi Contact Information) below or at such
          other address as directed by Kloudi, and shall be deemed to have been
          received by Kloudi (i) if given by hand, immediately upon receipt;
          (ii) if given by overnight courier service, the first business day
          following dispatch or (iii) if given by registered mail, postage
          prepaid and return receipt requested, the second business day after
          such notice is deposited in the mail. Kloudi may send notices to
          Customer through Customer’s email on file or through the Service. All
          notices given to Customer shall be deemed to have been received by
          Customer upon delivery.
        </p>
        <p className="column">
          <h3>13.6. Kloudi Contact Information</h3>
          Any Customer questions, complaints or claims regarding the Service
          should be sent to the following address: Kloudi.tech Salarpuria Tower
          I, Kloudi, 4th floor, 22, Hosur Rd, Chikku Lakshmaiah Layout,
          Koramangala, Bengaluru, Karnataka 560095
        </p>
        <p className="column">
          <h3>13.7. Waivers</h3>
          No waiver will be implied from conduct or failure to enforce or
          exercise rights under this Agreement, nor will any waiver be effective
          unless in a writing signed by a duly authorized representative on
          behalf of the party claimed to have waived. No provision of any
          purchase order or other business form employed by Customer will
          supersede the terms and conditions of this Agreement, and any such
          document relating to this Agreement shall be for administrative
          purposes only and shall have no legal effect.
        </p>
        <p className="column">
          <h3>13.8. Entire Agreement</h3>
          This Agreement is the complete and exclusive statement of the mutual
          understanding of the parties and supersedes and cancels all previous
          written and oral agreements and communications relating to the subject
          matter of this Agreement. Customer acknowledges that the Service is an
          on-line, subscription-based product, and that in order to provide
          improved customer experience Kloudi may make changes to the Service,
          and Kloudi will update the applicable Documentation accordingly.
        </p>
        <p className="column">
          <h3>13.9. Force Majeure</h3>
          Neither party shall be liable to the other for any delay or failure to
          perform any obligation under this Agreement (except for a failure to
          pay fees) if the delay or failure is due to unforeseen events that
          occur after the signing of this Agreement and that are beyond the
          reasonable control of such party, such as a strike, blockade, war, act
          of terrorism, riot, natural disaster, failure or diminishment of power
          or telecommunications or data networks or services, or refusal of a
          license by a government agency.
        </p>
        <p className="column">
          <h3>13.10. Subcontractors</h3>
          Kloudi may use the services of subcontractors and permit them to
          exercise the rights granted to Kloudi in order to provide the Service
          under this Agreement. These subcontractors may include, for example,
          Kloudi’s hosting, infrastructure and CDN providers. Kloudi remains
          responsible for compliance of any such subcontractor with the terms of
          this Agreement and the overall performance of the Service as required
          under this Agreement.
        </p>
        <p className="column">
          <h3>13.11. Subpoenas</h3>
          Nothing in this Agreement prevents Kloudi from disclosing Customer
          Data to the extent required by law, subpoenas, or court orders, but
          Kloudi shall use commercially reasonable efforts to notify Customer
          where permitted to do so.
        </p>
        <p className="column">
          <h3>13.12. Independent Contractors</h3>
          The parties to this Agreement are independent contractors. There is no
          relationship of partnership, joint venture, employment, franchise or
          agency created hereby between the parties. Neither party will have the
          power to bind the other or incur obligations on the other party’s
          behalf without the other party’s prior written consent.
        </p>
        <p className="column">
          <h3>13.13. Export Control</h3>
          In its use of the Service, Customer agrees to comply with all export
          and import laws and regulations of India and other applicable
          jurisdictions. Without limiting the foregoing, (i) Customer represents
          and warrants that it is not listed on any Indian government list of
          prohibited or restricted parties or located in (or a national of) a
          country that is subject to an Indian government embargo or that has
          been designated by the Indian government as a “terrorist supporting”
          country, (ii) Customer shall not (and shall not permit any of its
          users to) access or use the Service in violation of any Indian export
          embargo, prohibition or restriction.
        </p>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
