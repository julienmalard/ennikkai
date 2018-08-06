import os

from setuptools import setup, find_packages

கோப்புரை = os.path.split(os.path.realpath(__file__))[0]

with open(os.path.join(கோப்புரை, 'எண்ணிக்கை', 'புதிப்பு.txt')) as கோ:
    புதிப்பு = கோ.read().strip()

setup(
    name='ennikkai',
    version=புதிப்பு,
    packages=find_packages('/எண்ணிக்கை'),
    url='https://ennikkai.readthedocs.io',
    download_url='https://github.com/julienmalard/ennikkai',
    license='GNU GPL 3',
    author='ஜூலீஎன் ஜான் மலர் (Julien Jean Malard)',
    author_email='julien.malard@mail.mcgill.ca',
    description='எண் மொழிபெயர்ப்பு',
long_description='',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7'
    ],
    install_requires=[],
    package_data={
        '': ['*.json'],
    },
)