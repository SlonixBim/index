// This file defines the custom preview template for the Courses collection in Decap CMS.
// It uses `h` (React.createElement) which is globally exposed by Decap CMS.

const CoursePreview = createClass({
  render: function() {
    const entry = this.props.entry;
    
    // Inject Tailwind and Fonts into the CMS preview iframe
    const doc = this.props.document;
    if (doc && !doc.getElementById('tailwind-script')) {
      const script = doc.createElement('script');
      script.id = 'tailwind-script';
      script.src = 'https://cdn.tailwindcss.com';
      doc.head.appendChild(script);
      
      const fontLink = doc.createElement('link');
      fontLink.rel = 'stylesheet';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@600;700;900&display=swap';
      doc.head.appendChild(fontLink);
    }

    // Get fields
    const title = entry.getIn(['data', 'title']) || 'Course Title';
    const description = entry.getIn(['data', 'description']) || 'Short description goes here...';
    const gradient = entry.getIn(['data', 'gradient']) || 'from-blue-600 to-blue-500';
    const category = entry.getIn(['data', 'category']) || 'Category';
    const duration = entry.getIn(['data', 'duration']) || 'Duration';
    const level = entry.getIn(['data', 'level']) || 'Level';
    const image = entry.getIn(['data', 'image']) || '';
    const fullDescription = this.props.widgetFor('fullDescription');
    
    // Create the hero banner
    const heroBanner = h('div', { 
      className: `w-full bg-gradient-to-br ${gradient} p-6 md:p-12 text-white rounded-xl shadow-2xl mb-8 relative overflow-hidden`
    },
      h('div', { className: 'relative z-10' }, 
        h('span', { className: 'px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs md:text-sm font-semibold mb-4 inline-block' }, category),
        h('h1', { className: 'text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight' }, title),
        h('p', { className: 'text-base md:text-lg text-white/90 max-w-2xl' }, description),
        h('div', { className: 'flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 text-sm font-medium' }, 
          h('div', { className: 'flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg w-fit' }, '⏱ ', duration),
          h('div', { className: 'flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg w-fit' }, '📈 ', level)
        )
      ),
      image ? h('img', { 
        src: image,
        className: 'absolute top-0 right-0 w-1/2 h-full object-cover opacity-20 mix-blend-overlay'
      }) : null
    );

    // Create the content section
    const contentSection = h('div', { className: 'bg-white p-8 rounded-xl shadow-sm border border-gray-100 prose prose-lg max-w-none' }, 
      h('h2', { className: 'text-2xl font-bold mb-6 text-gray-900' }, 'About this Course'),
      fullDescription
    );

    // Return the full preview layout wrapped in Tailwind's base styling
    return h('div', { className: 'p-8 bg-gray-50 min-h-screen font-sans' }, 
      heroBanner,
      contentSection
    );
  }
});

// Register the preview template with Decap CMS
CMS.registerPreviewTemplate('courses', CoursePreview);
