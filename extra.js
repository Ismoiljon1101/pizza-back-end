const fs = require('fs-extra');

const directoriesToCopy = [
  { source: 'src/views', destination: 'dist/views' },
  { source: 'src/public', destination: 'dist/public' },
];

async function copyDirectories() {
  try {
    // copy predefined directories
    for (const directory of directoriesToCopy) {
      await fs.copy(directory.source, directory.destination);
    }

    // ensure uploads/members and uploads/products exist
    const uploadFolders = [
      'dist/uploads/members',
      'dist/uploads/products'
    ];

    for (const folder of uploadFolders) {
      await fs.ensureDir(folder);
    }

    console.log('✅ Successfully copied & created folders!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

copyDirectories().then;
