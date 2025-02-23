import os
import shutil
from flask_frozen import Freezer
from app import app

# Configure Frozen-Flask
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_BASE_URL'] = '/Elcoder/'
app.config['FREEZER_RELATIVE_URLS'] = True

# Initialize Freezer
freezer = Freezer(app)

# Set base URL for frozen files
app.config['FREEZER_BASE_URL'] = '/Elcoder/'

if __name__ == '__main__':
    freezer.freeze()

# Clean up existing build directory
if os.path.exists('build'):
    shutil.rmtree('build')

# Generate static files
freezer.freeze()

# Create .nojekyll file to disable Jekyll processing
with open('build/.nojekyll', 'w') as f:
    pass

print('Static site has been generated in the build directory.')