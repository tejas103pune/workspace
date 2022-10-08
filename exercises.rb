#Write a Ruby program to create a new string from a given string
#using the first three characters or whatever is there if the 
#string is less than length 3. Return n copies of the string.


# def multiple_string(str,n)
#     str.length < 3 ? str*n : str[0..2]*n
# end
# puts multiple_string('abcdefg',1)
# puts multiple_string('abcdefg',2)
# puts multiple_string('def',3)

# ---------------------------------------------------------------
#print current date time
# require 'date'
# current_time = DateTime.now
# cdt = current_time.strftime "%d/%m/%y  %H:%M"
# puts "Current Date time is:" +cdt

# -------------------------------------------------------------------------------
# 3. Write a Ruby program to create a new string which is n 
# copies of a given string where n is a non-negative integer.

# def copy_string(str,n)
#     return str*n
# end
# puts copy_string('tejas',2)

# Write a Ruby program which accept the radius of a circle from 
# the user and compute the parameter and area.
# radius = gets.to_f
# perimeter = 2 * 3.14 * radius
# area = 3.14 * radius * radius
# puts "perimeter is: #{ perimeter}" 
# puts "area is : #{ area}" 

# ---------------------------------------------------------------------------------------
# Write a Ruby program to check whether a string starts with "if"
# def  start_if(str)
#     return str[0, 2] == "if"
# end

# p start_if("ifelse")
# p start_if("else")

# p "enter first name" 
# first =  gets.chomp
# sp "enter last name"
# last = gets.chomp

# print "#{last} #{first}"

# -------------------------------------------------------------------
# Write a Ruby program to accept a filename from 
# the user print the extension of that.

# file =  "/user/system/test.rb"
# #file name
# fbname = File.basename file
# puts "file name: " +fbname
# #base name
# bname = File.basename file, ".rb"
# puts "Base name:" +bname
# #extention
# fextn = File.extname file
# puts "Extention:" +fextn
# #path name
# path_name = File.dirname file
# puts "path name:" +path_name


# --------------------------------------------------------------
# =========== Logical operator =============

# Write a Ruby program to check two integer values whether both of 
# them is in the range 20..30 inclusive.
# def in2030(a,b)
#     return ((a >= 20 && a <= 30) && (b >= 20 && b<=30))
# end
# puts in2030(21,31) # true & false = fasle
# puts in2030(22,30) # true & true = true

# Write a Ruby program to check two integer values whether either of 
# them is in the range 20..30 inclusive.
# def in2030(a,b)
#     return ((a >= 20 && a <= 30) || (b >= 20 && b<=30))
# end
# puts in2030(21,31) # true & false = true 
# puts in2030(15,10) # false & false = false

#----------------------------------------------------------------
# Write a Ruby program to check three numbers and return true if one or more of them are small.
# A number is called "small" if it is in the range 1..10 inclusive.

# def check_small(a,b,c)
#     return (a >= 1 && a <= 10) || (b >= 1 && b <= 10) || (c >= 1 && c <= 10)
# end
# puts check_small(7,22,99)
# puts check_small(2,22,8)
# puts check_small(7,7,9)

# ---------------------------------------------------------------------
# Write a Ruby program to check two numbers and return true if one or the other is small,
# but not both. A number is called "small" if it is in the range 1..10 inclusive.

# def check_small2(a,b)
#     return ((a >= 1 && a <= 10) && !(b >= 1 && b <= 10)) ||
#             !(a >= 1 && a <= 10) && (b >= 1 && b <= 10)

# end
# puts check_small2(1,19)
# puts check_small2(33,19)
# puts check_small2(1,4)

# ---------------------------------------------------------------------
# Write a Ruby program to print the following 'here document'.
# Sample string :
# a string that you "don't" have to escape
# This
# is a ....... multi-line
# heredoc string --------> example

# puts %{Sample string :
# a string that you "don't" have to escape
# This
# is a ....... multi-line
# heredoc string --------> example"}
#  puts <<-EOS
#  Sample string :
#  a string that you "don't" have to escape
#  This
#  is a ....... multi-line
#  heredoc string --------> example
#  EOS


# -----------------------------------------------------------------------------
# Write a Ruby program to create a new string where "if" is added to the 
# front of a given string. If the string already begins with "if", 
# return the string unchanged.

# def add_if(str)
#  str[0,2] == "if" ? str : "if " << str  
# end
# puts add_if("else")
# puts add_if("if else")

