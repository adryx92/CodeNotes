import json
import requests
import os
import sys
import colorama
from colorama import Fore, Back, Style

colorama.init(autoreset=True)

def print_error(msg):
	print(Fore.RED + msg)

def print_success(msg):
	print(Fore.GREEN + Style.BRIGHT + msg)

def print_warn(msg):
	print(Fore.YELLOW + msg)

def print_exit_msg():
	input('\nPress "enter" to exit...')

fileName = input('Insert the file name and press "enter". Leave empty to use "sample.json": ')
if fileName == '':
	fileName = 'sample.json'

#check file exists
if not os.path.exists(fileName):
	print_error('File not found')
	print_exit_msg()
	sys.exit()

print('\nReading {}...'.format(fileName))

# read file
jsonFile = open(fileName, 'r')
data = jsonFile.read()
jsonFile.close()
if data == None or data == '':
	print_error('File is empty')
	print_exit_msg()
	sys.exit()

# parse file
try:
	obj = json.loads(data)
except:
	print_error('Error parsing JSON')
	print_exit_msg()
	sys.exit()

productsList = obj['products']

errors = list()
success = list()

# get prices
for product in productsList:
	try:
		prodName = product['name']
		prodId = product['id']
		price = product['price']
	except:
		print_error('\nError parsing JSON. Missing informations?')
		print_exit_msg()
		sys.exit()

	# if not already set
	if price == None or price == '':
		url = 'https:/example.com?id={}'.format(prodId)

		try:
			response = requests.get(url)
		except:
			print_error('\nError requesting the data')
			print_exit_msg()
			sys.exit()

		responseText = response.text
		if (response.status_code == 200):
			print_success('\nGot price for {}:'.format(prodName))
			print(responseText)
			product['price'] = responseText
			success.append(prodName)
		else:
			print_error('\nError getting price for {}:'.format(prodName))
			print(responseText)
			errors.append(prodName)
	else:
		print_warn('\nSkipping price for {}; it\'s already set'.format(prodName))

# save file
newFile = open(fileName, 'w')
newFile.write(json.dumps(obj))
newFile.close()

print('\n-----------------------------------------------------------------\n')

if (len(errors) > 0):
	print_error('Could not get following prices:')
	print(errors)

if (len(success) > 0):
	print_success('Got following prices:')
	print(success)

if (len(success) == 0 and len(errors) == 0):
	print('No prices gotten')

print_exit_msg()