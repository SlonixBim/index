// This file defines the custom preview template for the Courses collection in Decap CMS.
// It uses `h` (React.createElement) which is globally exposed by Decap CMS.

const CoursePreview = createClass({
  render: function() {
    const entry = this.props.entry;
    
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
      className: `w-full bg-gradient-to-br ${gradient} p-12 text-white rounded-xl shadow-2xl mb-8 relative overflow-hidden`
    },
      h('div', { className: 'relative z-10' }, 
        h('span', { className: 'px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-4 inline-block' }, category),
        h('h1', { className: 'text-4xl font-black mb-4 tracking-tight' }, title),
        h('p', { className: 'text-lg text-white/90 max-w-2xl' }, description),
        h('div', { className: 'flex gap-4 mt-6 text-sm font-medium' }, 
          h('div', { className: 'flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg' }, '⏱ ', duration),
          h('div', { className: 'flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg' }, '📈 ', level)
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
