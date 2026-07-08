// Generated from uploaded HTML
// Drop this into your app.js

const ACCORDIONS = [
    {
        n: "Intelligent Clinical Retrieval",
        icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13.125 13.125L11.0508 11.0508M11.0508 11.0508C11.312 10.7897 11.5192 10.4796 11.6605 10.1384C11.8019 9.79716 11.8746 9.43143 11.8746 9.06208C11.8746 8.69274 11.8019 8.32701 11.6605 7.98578C11.5192 7.64455 11.312 7.3345 11.0508 7.07333C10.7897 6.81217 10.4796 6.605 10.1384 6.46366C9.79716 6.32231 9.43143 6.24957 9.06208 6.24957C8.69274 6.24957 8.32701 6.32231 7.98578 6.46366C7.64455 6.605 7.3345 6.81217 7.07333 7.07333C6.54577 7.60089 6.24939 8.31642 6.24939 9.0625C6.24939 9.80858 6.54577 10.5241 7.07333 11.0517C7.60089 11.5792 8.31642 11.8756 9.0625 11.8756C9.80858 11.8756 10.5241 11.5792 11.0517 11.0517L11.0508 11.0508ZM17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        s: "Search Fields allow existing clinical information to be retrieved automatically from the patient record using configured search criteria.",
        body: `
    <p>Search Fields allow existing clinical information to be retrieved automatically from the patient record using configured search criteria.</p>
    <div class="accordion-exp-inners">
        <div class="col">
        <div class="lbl">These fields can support:</div>
        <ul><li>Clinical summaries</li><li>Historical data retrieval</li><li>Referral criteria checks</li><li>Automated calculations</li><li>Data-driven workflows</li></ul>
        </div>
        </div>
    <p style="margin-top:12px">Search field functionality helps reduce manual searching and improves consistency across referrals.</p>
    <p style="margin-top:12px">Where no relevant coded patient data exists, the field may display no recorded data or remain blank depending on the configuration.</p>`
    },

    {
        n: "Mandatory Fields",
        icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 7.5V10.625M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 13.125H10.0067V13.1317H10V13.125Z" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        s: "Ensures essential information is completed before submission",
        benefit: "Reduces rejected referrals",
        body: `
    <p>Mandatory Fields ensure that essential referral information is completed before the referral can be saved or submitted.</p>
    <div class="accordion-exp-inners">
    <div class="col">
    <div class="lbl">Mandatory functionality aims to supports:</div>
    <ul><li>Improved referral quality</li><li>Reduced referral rejections</li><li>Enhanced patient safety</li><li>More complete referral information</li></ul>
</div>
<div class="col"><div class="lbl">Mandatory functionality can be applied to:</div>
    <ul><li>Input fields</li><li>Checkboxes</li><li>Selection lists</li><li>Clinical criteria fields</li></ul></div>
    </div>


    <p style="margin-top:12px">If Mandatory information has not been completed, the user will be notified before the referral can proceed.</p>
    <div class="note"><span>Please note:</span> DXS may suggest functionality based on best practice and experience gained from supporting other services. Where functionality affects how users complete or submit a form, including Required fields and Strict Validation, we will always seek customer confirmation before implementation to ensure it aligns with local requirements and processes</div>`
    },

    {
        n: "Recommended Fields",
        icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.375 9.375L9.40917 9.35833C9.51602 9.30495 9.63594 9.2833 9.75472 9.29596C9.8735 9.30862 9.98616 9.35505 10.0794 9.42976C10.1726 9.50446 10.2424 9.60432 10.2806 9.71749C10.3189 9.83066 10.3238 9.95242 10.295 10.0683L9.705 12.4317C9.67595 12.5476 9.68078 12.6695 9.71891 12.7828C9.75704 12.8961 9.82687 12.9961 9.92011 13.071C10.0134 13.1458 10.1261 13.1923 10.245 13.205C10.3639 13.2177 10.4839 13.196 10.5908 13.1425L10.625 13.125M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 6.875H10.0067V6.88167H10V6.875Z" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `,
        s: "Encourages additional supporting information where appropriate",
        benefit: "Maintains clinician flexibility",
        body: `
    <p style="margin-top:12px">Recommended Fields encourage clinicians to provide additional supporting information where appropriate.</p>
    <p style="margin-top:12px">Unlike Mandatory Fields, Recommended Fields can be bypassed if clinically appropriate.</p>
    <div class="accordion-exp-inners">
    <div class="col">
    <div class="lbl">Recommended functionality aims to support:</div>
    <ul><li>Improved referral quality</li><li>Better supporting information</li><li>Increased clinical flexibility</li><li>Reduced unnecessary workflow restrictions</li></ul>
</div>
</div>
    <p style="margin-top:12px">Users will receive a warning or prompt if recommended information has not been completed.</p>`
    },

    {
        n: "User Guidance", icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M8.2325 6.26583C9.20833 5.41167 10.7917 5.41167 11.7675 6.26583C12.7442 7.12 12.7442 8.505 11.7675 9.35917C11.5983 9.50833 11.4092 9.63083 11.2092 9.7275C10.5883 10.0283 10.0008 10.56 10.0008 11.25V11.875M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 14.375H10.0067V14.3817H10V14.375Z" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `, s: "Input Hints provide guidance to users while completing forms.", body: `
    <p>Input Hints provide guidance to users while completing forms.</p>
    <div class="accordion-exp-inners">
    <div class="col"><div class="lbl">Hints can be displayed within fields or selection lists to:</div>
    <ul><li>Clarify expected input</li><li>Improve consistency</li><li>Reduce user uncertainty</li><li>Support form completion</li></ul></div>
    <div class="col"><div class="lbl">Input Hints are particularly useful for:</div>
    <ul><li>Complex referral criteria</li><li>Specific formatting requirements</li><li>Clinical instructions</li><li>Workflow guidance</li></ul></div>
</div>

    `
    },

    {
        n: "Structured Data Capture", icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M6.875 5.625H16.875M6.875 10H16.875M6.875 14.375H16.875M3.125 5.625H3.13083V5.63167H3.125V5.625ZM3.4375 5.625C3.4375 5.70788 3.40458 5.78737 3.34597 5.84597C3.28737 5.90458 3.20788 5.9375 3.125 5.9375C3.04212 5.9375 2.96263 5.90458 2.90403 5.84597C2.84542 5.78737 2.8125 5.70788 2.8125 5.625C2.8125 5.54212 2.84542 5.46263 2.90403 5.40403C2.96263 5.34542 3.04212 5.3125 3.125 5.3125C3.20788 5.3125 3.28737 5.34542 3.34597 5.40403C3.40458 5.46263 3.4375 5.54212 3.4375 5.625ZM3.125 10H3.13083V10.0067H3.125V10ZM3.4375 10C3.4375 10.0829 3.40458 10.1624 3.34597 10.221C3.28737 10.2796 3.20788 10.3125 3.125 10.3125C3.04212 10.3125 2.96263 10.2796 2.90403 10.221C2.84542 10.1624 2.8125 10.0829 2.8125 10C2.8125 9.91712 2.84542 9.83763 2.90403 9.77903C2.96263 9.72042 3.04212 9.6875 3.125 9.6875C3.20788 9.6875 3.28737 9.72042 3.34597 9.77903C3.40458 9.83763 3.4375 9.91712 3.4375 10ZM3.125 14.375H3.13083V14.3817H3.125V14.375ZM3.4375 14.375C3.4375 14.4579 3.40458 14.5374 3.34597 14.596C3.28737 14.6546 3.20788 14.6875 3.125 14.6875C3.04212 14.6875 2.96263 14.6546 2.90403 14.596C2.84542 14.5374 2.8125 14.4579 2.8125 14.375C2.8125 14.2921 2.84542 14.2126 2.90403 14.154C2.96263 14.0954 3.04212 14.0625 3.125 14.0625C3.20788 14.0625 3.28737 14.0954 3.34597 14.154C3.40458 14.2126 3.4375 14.2921 3.4375 14.375Z" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `, s: "Item Lists provide predefined selectable options within forms.", body: `

    <div class="accordion-exp-inners">
    <div class="col"><p style="margin-bottom:12px">Item Lists provide predefined selectable options within forms.</p><div class="lbl">These lists help:</div>
    <ul><li>Standardise data capture</li><li>Improve consistency</li><li>Reduce free-text variation</li><li>Improve reporting and auditability</li></ul></div>
    <div class="col"><p style="margin-bottom:12px">Lists can be configured in multiple ways depending on the referral requirements.</p>
    <div class="lbl">Examples include:</div>
    <ul><li>Alphabetical lists</li><li>Prioritised lists</li><li>Highlighted options</li><li>Grouped categories</li></ul></div>
</div>


    `
    },

    {
        n: "Clinical Calculations", icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M13.125 13.125V15M6.875 9.375H6.88167V9.38167H6.875V9.375ZM6.875 11.25H6.88167V11.2567H6.875V11.25ZM6.875 13.125H6.88167V13.1317H6.875V13.125ZM6.875 15H6.88167V15.0067H6.875V15ZM8.95667 9.375H8.9625V9.38167H8.95667V9.375ZM8.95667 11.25H8.9625V11.2567H8.95667V11.25ZM8.95667 13.125H8.9625V13.1317H8.95667V13.125ZM8.95667 15H8.9625V15.0067H8.95667V15ZM11.0433 9.375H11.05V9.38167H11.0433V9.375ZM11.0433 11.25H11.05V11.2567H11.0433V11.25ZM11.0433 13.125H11.05V13.1317H11.0433V13.125ZM11.0433 15H11.05V15.0067H11.0433V15ZM13.125 9.375H13.1317V9.38167H13.125V9.375ZM13.125 11.25H13.1317V11.2567H13.125V11.25ZM6.875 5H13.125V6.875H6.875V5ZM10 1.875C8.42333 1.875 6.86833 1.96667 5.33917 2.14333C4.4225 2.25 3.75 3.04167 3.75 3.96417V16.25C3.75 16.7473 3.94754 17.2242 4.29917 17.5758C4.65081 17.9275 5.12772 18.125 5.625 18.125H14.375C14.8723 18.125 15.3492 17.9275 15.7008 17.5758C16.0525 17.2242 16.25 16.7473 16.25 16.25V3.96417C16.25 3.04083 15.5783 2.25 14.6608 2.14333C13.1137 1.96417 11.5575 1.87458 10 1.875Z" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `,
        s: "Automates scoring and calculations", benefit: "Improves accuracy and saves time", body: `
    <p>SMART Referrals support automated clinical calculations and scoring tools.</p>
    <div class="accordion-exp-inners">
    <div class="col"><div class="lbl">Calculations can be driven using:</div>
    <ul><li>Checkbox selections</li><li>Numeric input values</li><li>Patient record data</li><li>Search Rule outputs</li></ul></div>
    <div class="col"><div class="lbl">Clinical Calculations support:</div>
    <ul><li>Improved accuracy</li><li>Reduced manual calculations</li><li>Faster referral completion</li><li>Standardised scoring workflows</li></ul></div>
    <div class="col"><div class="lbl">Examples may include:</div>
    <ul><li>Dementia assessments</li><li>Pressure ulcer scoring</li><li>Cancer pathway scoring</li><li>BMI calculations</li><li>Risk assessment tools</li></ul></div>
</div>



    <p style="margin-top:12px">Validation can also be combined with calculations to ensure values remain within acceptable clinical ranges.</p>
    <div class="note"><span>Please note:</span> although the calculations are automated, it will be made transparent and user controlled by clearly indicating scoring on the fields itself or through input hints.</div>`
    },

    {
        n: "Patient Record Optimisation",
        icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M6.25 6.25H5.625C5.12772 6.25 4.65081 6.44754 4.29917 6.79917C3.94754 7.15081 3.75 7.62772 3.75 8.125V14.375C3.75 14.8723 3.94754 15.3492 4.29917 15.7008C4.65081 16.0525 5.12772 16.25 5.625 16.25H11.875C12.3723 16.25 12.8492 16.0525 13.2008 15.7008C13.5525 15.3492 13.75 14.8723 13.75 14.375V8.125C13.75 7.62772 13.5525 7.15081 13.2008 6.79917C12.8492 6.44754 12.3723 6.25 11.875 6.25H11.25M11.25 9.375L8.75 11.875L6.25 9.375M8.75 11.875V1.25M13.75 8.75H14.375C14.8723 8.75 15.3492 8.94754 15.7008 9.29917C16.0525 9.65081 16.25 10.1277 16.25 10.625V16.875C16.25 17.3723 16.0525 17.8492 15.7008 18.2008C15.3492 18.5525 14.8723 18.75 14.375 18.75H8.125C7.62772 18.75 7.15081 18.5525 6.79917 18.2008C6.44754 17.8492 6.25 17.3723 6.25 16.875V16.25" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `,
        s: "Writes data back into the patient record",
        benefit: "Improves coding and operational efficiency by reducing manual entry, duplicate administration, and time spent updating patient records.",
        body: `
    <p>Patient Record Optimisation supports the safe and structured write-back of referral information into the patient record through two methods: write-backs and passbacks.</p>
    <div class="accordion-exp-inners">
    <div class="col">
    <ul>
      <li><b>Write-backs</b> apply a general referral code to indicate the type of referral submitted.
        <ul><li>Example: <span class="code">280521000000108</span> | Fast track referral for suspected head and neck cancer (procedure)</li></ul></li>
      <li><b>Passbacks</b> are linked to specific fields to capture relevant clinical observations recorded during the referral process.
        <ul><li>Example: <span class="code">60621009</span> | Body mass index (observable entity)</li></ul></li>
    </ul>
</div>
<div class="col">
<div class="lbl">This functionality aims to help:</div>
    <ul><li>Improve coding accuracy</li><li>Reduce duplicate data entry</li><li>Support QOF coding improvements</li><li>Improve workflow efficiency</li><li>Enhance clinical record keeping</li></ul>
</div>
</div>

    <p style="margin-top:12px">Patient Record Optimisation can be applied to multiple field types depending on the connected clinical system and referral requirements.</p>
    <div class="note"><span>Please note:</span> All codes are carefully reviewed and selected by the clinical team to support accurate and safe patient record keeping. Passbacks are typically limited to observable or measurable entries, such as BMI or blood pressure. Diagnostic codes are not used, as referral forms are not intended to diagnose conditions, and inappropriate coding could introduce clinical risk or trigger unintended workflows</div>`
    },

    {
        n: "Patient Validation", icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M7.5 10.6251L9.375 12.5001L12.5 8.12505M10 2.26172C8.11311 4.05358 5.60022 5.03637 2.99834 5.00005C2.66737 6.00837 2.49915 7.06297 2.5 8.12422C2.5 12.7842 5.68667 16.6992 10 17.8101C14.3133 16.7001 17.5 12.7851 17.5 8.12505C17.5 7.03339 17.325 5.98255 17.0017 4.99922H16.875C14.2117 4.99922 11.7917 3.95922 10 2.26172Z" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `, s: "Checks referral criteria automatically", benefit: "Supports referral appropriateness", body: `
<p>Validation functionality supports safer and more accurate referrals by checking referral criteria and user input. Validation will only be applied where the validation criteria are clearly visible to the end user within the form.</p>
<div class="accordion-exp-inners">
<div class="col"> <div class="lbl">Validation can be used to:</div>
    <ul><li>Confirm patient eligibility</li><li>Ensure accurate data entry</li><li>Reduce incomplete referrals</li><li>Prevent inappropriate referrals</li><li>Support clinical decision making</li></ul></div>
    <div class="col">
    <div class="lbl">Validation may occur:</div>
    <ul><li>During form completion</li><li>When loading the referral</li><li>Before saving or submitting the referral</li></ul>
</div>
<div class="col">
<p style="margin-bottom:12px">Users may receive prompts, warnings, or notifications where referral criteria are not met.</p>
    <div class="lbl">Validation functionality can be configured to either:</div>
    <ul><li>Warn users while still allowing progression</li><li>Prevent submission until conditions are met.</li><li>Strict validation rules that prevent submission will only be implemented where specifically requested by the ICB. DXS will never introduce restrictions that block referral submission unless explicitly defined as a requirement by the ICB.</li></ul>
</div>
</div>




    <div class="note"><span>Please note:</span> DXS may suggest functionality based on best practice and experience gained from supporting other services. Where functionality affects how users complete or submit a form, including Required fields and Strict Validation, we will always seek customer confirmation before implementation to ensure it aligns with local requirements and processes</div>`
    },

    {
        n: "Show & Hide", icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.31633 6.8525C2.53671 7.77265 1.95617 8.84434 1.61133 10C2.68799 13.615 6.03633 16.25 9.99966 16.25C10.8272 16.25 11.6272 16.135 12.3855 15.9208M5.18966 5.19C6.61687 4.24822 8.28973 3.7474 9.99966 3.75C13.963 3.75 17.3105 6.385 18.3872 9.99833C17.7971 11.9728 16.5305 13.6763 14.8097 14.81M5.18966 5.19L2.49966 2.5M5.18966 5.19L8.23133 8.23167M14.8097 14.81L17.4997 17.5M14.8097 14.81L11.768 11.7683C12.0002 11.5362 12.1843 11.2605 12.31 10.9572C12.4356 10.6539 12.5003 10.3287 12.5003 10.0004C12.5003 9.67208 12.4356 9.34697 12.31 9.04363C12.1843 8.74029 12.0002 8.46467 11.768 8.2325C11.5358 8.00033 11.2602 7.81617 10.9569 7.69052C10.6535 7.56487 10.3284 7.5002 10.0001 7.5002C9.67175 7.5002 9.34663 7.56487 9.04329 7.69052C8.73995 7.81617 8.46433 8.00033 8.23216 8.2325M11.7672 11.7675L8.23299 8.23333" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `, s: "Displays only relevant sections of a form", benefit: "Simplifies form completion", body: `
    <p>Show & Hide functionality dynamically displays relevant sections of a referral form based on user input.</p>
    <div class="accordion-exp-inners">
    <div class="col"><div class="lbl">This helps:</div>
    <ul><li>Simplify form completion</li><li>Reduce cognitive overload</li><li>Improve usability</li><li>Create more intelligent workflows</li><li>Reduce unnecessary scrolling</li></ul></div>
    <div class="col">
    <div class="lbl">Show & Hide functionality can be triggered by:</div>
    <ul><li>Checkboxes</li><li>Numeric values</li><li>Free-text input</li><li>Specific dates</li><li>Clinical criteria</li></ul>
</div>
</div>


    <p style="margin-top:12px">Only relevant information is displayed to the user at the appropriate time.</p>`
    },

    {
        n: "Digital Signatures", icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M14.0517 3.73937L15.4575 2.33271C15.7506 2.03964 16.148 1.875 16.5625 1.875C16.977 1.875 17.3744 2.03964 17.6675 2.33271C17.9606 2.62577 18.1252 3.02325 18.1252 3.43771C18.1252 3.85216 17.9606 4.24964 17.6675 4.54271L8.81833 13.3919C8.37777 13.8322 7.83447 14.1558 7.2375 14.3335L5 15.0002L5.66667 12.7627C5.8444 12.1657 6.16803 11.6224 6.60833 11.1819L14.0517 3.73937ZM14.0517 3.73937L16.25 5.93771M15 11.6669V15.6252C15 16.1225 14.8025 16.5994 14.4508 16.951C14.0992 17.3027 13.6223 17.5002 13.125 17.5002H4.375C3.87772 17.5002 3.40081 17.3027 3.04917 16.951C2.69754 16.5994 2.5 16.1225 2.5 15.6252V6.87521C2.5 6.37793 2.69754 5.90101 3.04917 5.54938C3.40081 5.19775 3.87772 5.00021 4.375 5.00021H8.33333" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `, s: "Enables electronic form sign-off", benefit: "Improves accountability and workflow completion", body: `
    <p>Digital Signatures allow users to electronically sign referral forms.</p>
    <div class="accordion-exp-inners">
    <div class="col">
    <div class="lbl">Signature functionality supports:</div>
    <ul><li>Individual signing</li><li>Multiple signature workflows</li><li>Accountability and auditability</li><li>Faster referral completion</li></ul>
</div>
</div>

    <p style="margin-top:12px">Digital signatures can be linked to DXS user profiles for streamlined workflows.</p>`
    },

    {
        n: "Interactive Images",
        icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M1.875 13.125L6.17417 8.82583C6.34828 8.65172 6.55498 8.51361 6.78246 8.41938C7.00995 8.32515 7.25377 8.27665 7.5 8.27665C7.74623 8.27665 7.99005 8.32515 8.21754 8.41938C8.44502 8.51361 8.65172 8.65172 8.82583 8.82583L13.125 13.125M11.875 11.875L13.0492 10.7008C13.2233 10.5267 13.43 10.3886 13.6575 10.2944C13.885 10.2001 14.1288 10.1516 14.375 10.1516C14.6212 10.1516 14.865 10.2001 15.0925 10.2944C15.32 10.3886 15.5267 10.5267 15.7008 10.7008L18.125 13.125M3.125 16.25H16.875C17.2065 16.25 17.5245 16.1183 17.7589 15.8839C17.9933 15.6495 18.125 15.3315 18.125 15V5C18.125 4.66848 17.9933 4.35054 17.7589 4.11612C17.5245 3.8817 17.2065 3.75 16.875 3.75H3.125C2.79348 3.75 2.47554 3.8817 2.24112 4.11612C2.0067 4.35054 1.875 4.66848 1.875 5V15C1.875 15.3315 2.0067 15.6495 2.24112 15.8839C2.47554 16.1183 2.79348 16.25 3.125 16.25ZM11.875 6.875H11.8817V6.88167H11.875V6.875ZM12.1875 6.875C12.1875 6.95788 12.1546 7.03737 12.096 7.09597C12.0374 7.15458 11.9579 7.1875 11.875 7.1875C11.7921 7.1875 11.7126 7.15458 11.654 7.09597C11.5954 7.03737 11.5625 6.95788 11.5625 6.875C11.5625 6.79212 11.5954 6.71263 11.654 6.65403C11.7126 6.59542 11.7921 6.5625 11.875 6.5625C11.9579 6.5625 12.0374 6.59542 12.096 6.65403C12.1546 6.71263 12.1875 6.79212 12.1875 6.875Z" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `,
        s: "Allows visual clinical annotation",
        benefit: "Improves accuracy and clarity of clinical information captured on referral forms",
        body: `
    <p>Interactive Images allow clinicians to annotate directly onto clinical images and diagrams using digital drawing tools helping them to identify and select the correct anatomical location, condition area, or symptom site more precisely than free text alone.</p>
    <div class="accordion-exp-inners">
    <div class="col"><div class="lbl">This functionality supports:</div>
    <ul><li>Improved clinical communication</li><li>More accurate Visual documentation</li><li>Enhanced referral quality and detail</li><li>Clearer representation of clinical findings</li></ul></div>
    <div class="col">
    <div class="lbl">Examples may include:</div>
    <ul><li>Anatomical diagrams</li><li>Wound mapping</li><li>Pain locations</li><li>Dermatology annotations</li></ul>
</div>
</div>

    `
    },

    {
        n: "Instruction Banners",
        icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M15.9792 3.4375C13.6852 4.61244 11.1846 5.32993 8.61667 5.55C8.04333 5.6 7.46167 5.625 6.875 5.625H6.25C5.25544 5.625 4.30161 6.02009 3.59835 6.72335C2.89509 7.42661 2.5 8.38044 2.5 9.375C2.5 10.3696 2.89509 11.3234 3.59835 12.0267C4.30161 12.7299 5.25544 13.125 6.25 13.125H6.875C7.46167 13.125 8.04333 13.15 8.61667 13.2M8.61667 13.2C8.8275 14.0017 9.10333 14.7767 9.4375 15.5192C9.64333 15.9775 9.4875 16.5275 9.05167 16.7783L8.50417 17.095C8.045 17.36 7.45417 17.1925 7.23167 16.7108C6.70358 15.5684 6.30121 14.3719 6.03167 13.1425M8.61667 13.2C8.28915 11.9514 8.1239 10.6658 8.125 9.375C8.125 8.05333 8.29583 6.77167 8.61667 5.55M8.61667 13.2C11.1846 13.4201 13.6852 14.1376 15.9792 15.3125M15.9792 3.4375C16.4325 4.8987 16.716 6.40725 16.8242 7.93333C16.8925 8.89323 16.8925 9.85677 16.8242 10.8167C16.716 12.3427 16.4325 13.8513 15.9792 15.3125C15.8808 15.6292 15.775 15.9408 15.6625 16.25M15.9792 3.4375C15.8814 3.12241 15.7759 2.80981 15.6625 2.5M16.8242 7.93333C17.2367 8.2775 17.5 8.79583 17.5 9.375C17.5 9.95417 17.2367 10.4725 16.8242 10.8167" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `,
        s: "Instruction Banners display important guidance or workflow information to users while completing forms.",
        body: `
    <p>Instruction Banners display important guidance or workflow information to users while completing forms.</p>
    <div class="accordion-exp-inners">
    <div class="col">
    <div class="lbl">Instruction Banners can support:</div>
    <ul><li>Referral guidance</li><li>Clinical reminders</li><li>Workflow instructions</li><li>Important updates</li><li>Hyperlinks to supporting resources</li></ul>
</div>
</div>

    <p style="margin-top:12px">These banners help ensure important information remains visible throughout the referral process.</p>`
    },

    {
        n: "SMART Assist & Linked Resources", icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M11.25 5H4.375C3.87772 5 3.40081 5.19754 3.04917 5.54917C2.69754 5.90081 2.5 6.37772 2.5 6.875V15.625C2.5 16.1223 2.69754 16.5992 3.04917 16.9508C3.40081 17.3025 3.87772 17.5 4.375 17.5H13.125C13.6223 17.5 14.0992 17.3025 14.4508 16.9508C14.8025 16.5992 15 16.1223 15 15.625V8.75M6.25 13.75L17.5 2.5M17.5 6.875V2.5H13.125" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `, s: "Provides direct access to pathways and guidance", benefit: "Supports clinical decision making", body: `
<div class="accordion-exp-inners">
<div class="col"><div class="lbl">SMART Referrals can include hyperlinks to:</div>
    <ul><li>Clinical pathways</li><li>Care pathways</li><li>Guidance documents</li><li>Patient information leaflets</li><li>Educational resources</li><li>DXS content</li><li>National clinical content</li></ul></div>
    <div class="col"><div class="lbl">This functionality supports:</div>
    <ul><li>Faster access to information</li><li>Improved clinical decision making</li><li>Better user guidance</li><li>Reduced workflow disruption</li></ul></div>
</div>
    <p style="margin-top:12px">Links can direct users to entire documents or specific sections where required.</p>
    <div class="note"><span>Important:</span> PDF links open the document in its entirety. Direct linking to a specific page, section, heading, bookmark, or location within a PDF is not supported.</div>`
    },

    {
        n: "Export Controls",
        icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.6 11.5242C5.4 11.5492 5.2 11.5758 5 11.6042M5.6 11.5242C8.52188 11.1576 11.4781 11.1576 14.4 11.5242M5.6 11.5242L5.28333 15M14.4 11.5242C14.6 11.5492 14.8 11.5758 15 11.6042M14.4 11.5242L14.7167 15L14.9075 17.1025C14.9193 17.2322 14.904 17.363 14.8624 17.4864C14.8209 17.6099 14.7541 17.7233 14.6663 17.8195C14.5785 17.9157 14.4716 17.9926 14.3524 18.0452C14.2332 18.0978 14.1044 18.125 13.9742 18.125H6.02583C5.47417 18.125 5.0425 17.6517 5.0925 17.1025L5.28333 15M14.715 15H15.6242C15.8705 15.0001 16.1144 14.9517 16.342 14.8575C16.5695 14.7633 16.7763 14.6252 16.9505 14.4511C17.1247 14.277 17.2629 14.0703 17.3572 13.8427C17.4515 13.6152 17.5 13.3713 17.5 13.125V7.88C17.5 6.97917 16.86 6.20083 15.9692 6.0675C15.4392 5.98823 14.9077 5.9196 14.375 5.86167C11.4669 5.54525 8.53308 5.54525 5.625 5.86167C5.09229 5.9196 4.56079 5.98823 4.03083 6.0675C3.14 6.20083 2.5 6.97917 2.5 7.88V13.125C2.5 13.6223 2.69754 14.0992 3.04917 14.4508C3.40081 14.8025 3.87772 15 4.375 15H5.28333M14.375 5.86167V2.8125C14.375 2.295 13.955 1.875 13.4375 1.875H6.5625C6.045 1.875 5.625 2.295 5.625 2.8125V5.86167M15 8.75H15.0067V8.75667H15V8.75ZM12.5 8.75H12.5067V8.75667H12.5V8.75Z" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `,
        s: "The Don't Print functionality allows selected sections of a form to remain hidden when the form is printed or exported.",
        body: `
    <p>The Don't Print functionality allows selected sections of a form to remain hidden when the form is printed or exported.</p>
    <div class="accordion-exp-inners">
    <div class="col"><div class="lbl">This helps:</div>
    <ul><li>Keep printed forms concise</li><li>Remove unnecessary workflow content</li><li>Improve document readability</li><li>Reduce visual clutter</li></ul></div>
    <div class="col"><div class="lbl">This functionality is commonly used for:</div>
    <ul><li>Internal guidance text</li><li>Workflow instructions</li><li>Hidden support content</li><li>Conditional sections</li><li>Protecting patient confidentiality in safeguarding scenarios, where certain sensitive information may be displayed to the clinician for completion purposes but excluded from printed or exported documents in line with confidentiality and safeguarding requirements.</li></ul></div>
</div>
    `
    },

    {
        n: "Conditional Logic", icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.95418 2.5C2.9907 4.88294 2.49692 7.42965 2.50001 10C2.50001 12.6525 3.01668 15.1833 3.95418 17.5M16.25 2.5C17.0558 4.81667 17.5 7.3475 17.5 10C17.5 12.6525 17.0558 15.1833 16.25 17.5M6.87501 7.40417L8.07835 6.6625C8.15859 6.61308 8.24898 6.58244 8.34274 6.57289C8.4365 6.56334 8.53121 6.57511 8.61977 6.60733C8.70834 6.63955 8.78847 6.69138 8.85417 6.75895C8.91988 6.82652 8.96945 6.90807 8.99918 6.9975L11.0008 13.0025C11.0307 13.0917 11.0803 13.1731 11.146 13.2405C11.2117 13.3079 11.2917 13.3595 11.3802 13.3917C11.4686 13.4238 11.5632 13.4355 11.6568 13.426C11.7504 13.4165 11.8407 13.3859 11.9208 13.3367L13.125 12.5958M6.25001 13.2208L6.42751 13.2958C6.72898 13.4237 7.06562 13.4422 7.37933 13.3484C7.69304 13.2545 7.96414 13.0541 8.14585 12.7817L11.8542 7.21833C12.0359 6.9459 12.3069 6.7454 12.6206 6.65139C12.9343 6.55738 13.2709 6.57575 13.5725 6.70333L13.75 6.77833" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `, s: "Group Exclusivity controls how certain checkbox or field selections interact with each other.", body: `
    <p>Group Exclusivity controls how certain checkbox or field selections interact with each other.</p>
    <div class="accordion-exp-inners">
    <div class="col"><div class="lbl">This functionality helps:</div>
    <ul><li>Prevent conflicting selections</li><li>Improve data accuracy</li><li>Simplify user interaction</li><li>Support cleaner workflows</li></ul></div>
    <div class="col"><div class="lbl">For example:</div>
    <ul><li>Selecting "Every Day" may automatically deselect individual day selections.</li><li>Selecting "Prefer not to disclose" may hide or disable related fields.</li></ul></div>
</div>

    `
    },

    {
        n: "Referral Routing",
        icon: `
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.00044 9.99984L2.72461 2.604C8.16867 4.18734 13.3024 6.68855 17.9046 9.99984C13.3027 13.3111 8.16921 15.8123 2.72544 17.3957L5.00044 9.99984ZM5.00044 9.99984H11.2504" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `,
        s: "Referral forms can include preconfigured email destinations to help users send referrals to the correct service or team.",
        body: `
    <p>Referral forms can include preconfigured email destinations to help users send referrals to the correct service or team.</p>
    <div class="accordion-exp-inners">
    <div class="col"><div class="lbl">This functionality supports:</div>
    <ul><li>Faster referral submission</li><li>Reduced manual addressing errors</li><li>Improved workflow consistency</li><li>Easier service routing</li></ul></div>
</div>

    <p style="margin-top:12px">Multiple email destinations can be configured where required.</p>`
    }
];

function renderAccordions(containerSelector = ".accordions-container") {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = ACCORDIONS.map((item, index) => {
        const benefit = item.benefit
            ? `<div class="key-features">KEY BENEFITS: <span>${item.benefit}</span></div>`
            : "";

        return `
<div class="accordion">
    <div class="accordion-intro">
        <div class="accordion-top">
            <div class="top-left">
                <div class="icon">
                    ${item.icon}
                </div>
                <div class="info">${item.n}</div>
            </div>
            <div class="top-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.25 6.875L10 13.125L3.75 6.875" stroke="#1D4F9F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div class="accordion-middle">${item.s}</div>
        ${benefit}
    </div>
    <div class="accordion-expanded">${item.body}</div>
</div>`;
    }).join("");

    const accordions = container.querySelectorAll(".accordion");
    accordions.forEach(acc => {
        acc.querySelector(".accordion-intro").addEventListener("click", () => {
            acc.classList.toggle("active");
        });
    });

    const expandBtn = document.querySelector(".expand-all");
    if (expandBtn) {
        expandBtn.addEventListener("click", () => {
            const expand = [...accordions].some(a => !a.classList.contains("active"));
            accordions.forEach(a => a.classList.toggle("active", expand));
            const p = expandBtn.querySelector("p");
            if (p) p.textContent = expand ? "Collapse All" : "Expand All";
            expandBtn.classList.toggle("active", expand);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderAccordions();
});
