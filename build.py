import os
import shutil
from flask_frozen import Freezer
from app import app

# Configure Frozen-Flask
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_BASE_URL'] = 'BlogNX/'
app.config['FREEZER_RELATIVE_URLS'] = True
freezer = Freezer(app)

# Clean up existing build directory
if os.path.exists('build'):
    shutil.rmtree('build')

# Generate static files
freezer.freeze()

# Create .nojekyll file to disable Jekyll processing
with open('build/.nojekyll', 'w') as f:
    pass

print('Static site has been generated in the build directory.')