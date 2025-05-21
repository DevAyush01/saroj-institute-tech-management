export default function GoogelMap() {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4">Our Location</h2>
      <div className="w-full h-[400px]">
        <iframe
          title="Saroj Educational Group Location"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14247.220866087042!2d81.00543223106618!3d26.798638649963233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba6ca2a7a514d%3A0x3d1202273fbf1912!2sSaroj%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1716306510795!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
}
