=begin
# $LOAD_PATH << '.'

require_relative 'module_Trig.rb'
require_relative 'module_moral.rb'

y = Trig.sin(Trig::PI)
puts y
=end

#Embed a module in a class using include

    require_relative "module_Trig.rb"

class Decade
    include Week
        no_of_yrs = 10
        def no_of_months
            puts Week::FIRST_DAY
            puts Week::SECOUND_DAY
            number = 10 * 12
            puts number 
        end
end

d1 = Decade.new
# puts Week:: FIRST_DAY
Week.weeks_in_month
Week.weeks_in_year
d1.no_of_months


















