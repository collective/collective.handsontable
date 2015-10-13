from setuptools import find_packages
from setuptools import setup
import json
import os

package_json = json.load(open(os.path.join(
    'src', 'collective', 'handsontable', 'package.json')))
version = package_json['version']

setup(
    name='collective.handsontable',
    version=version,
    description="Integrate the handsontable pattern in Plone.",
    long_description='{0}\n{1}'.format(
        open("README.rst").read(),
        open("CHANGES.rst").read(),
    ),
    classifiers=[
        "Framework :: Plone",
        "Framework :: Plone :: 4.3",
        "Framework :: Plone :: 5.0",
        "Programming Language :: Python",
        "Programming Language :: Python :: 2.6",
        "Programming Language :: Python :: 2.7",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    keywords='handsontable plone mockup patternslib',
    author='Plone Foundation',
    author_email='plone-developers@lists.sourceforge.net',
    url='https://github.com/collective/collective.handsontable',
    license='BSD',
    packages=find_packages('src'),
    package_dir={'': 'src'},
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'plone.resource',
    ],
    entry_points="""
    [z3c.autoinclude.plugin]
    target = plone
    """,
)
