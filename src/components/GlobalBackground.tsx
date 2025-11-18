export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Base white/light background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF] to-white" />
      
      {/* Mesh Gradient Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f4f7ff] via-[#eefaff] to-[#fafcff] opacity-12" />
      
      {/* Dot Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      {/* Gradient Blobs - Extended for full site */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large blob bottom right */}
        <div 
          className="absolute -bottom-20 -right-20 w-[600px] h-[600px] rounded-full opacity-[0.15] blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #87CEEB 0%, #DDA0DD 50%, #FFB6C1 100%)'
          }}
        />
        {/* Medium blob left side */}
        <div 
          className="absolute top-[15%] -left-32 w-[450px] h-[450px] rounded-full opacity-[0.12] blur-[90px]"
          style={{
            background: 'radial-gradient(circle, #B0E0E6 0%, #DDA0DD 100%)'
          }}
        />
        {/* Small accent blob top right */}
        <div 
          className="absolute top-20 right-[15%] w-[300px] h-[300px] rounded-full opacity-[0.10] blur-[80px]"
          style={{
            background: 'radial-gradient(circle, #FFDAB9 0%, #FFB6C1 100%)'
          }}
        />
        {/* Mid-page accent blob */}
        <div 
          className="absolute top-[50%] left-[10%] w-[350px] h-[350px] rounded-full opacity-[0.08] blur-[85px]"
          style={{
            background: 'radial-gradient(circle, #E6E6FA 0%, #B0E0E6 100%)'
          }}
        />
        {/* Bottom page accent blob */}
        <div 
          className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full opacity-[0.10] blur-[90px]"
          style={{
            background: 'radial-gradient(circle, #FFB6C1 0%, #DDA0DD 100%)'
          }}
        />
      </div>
    </div>
  );
};
