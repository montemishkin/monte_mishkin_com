#!/usr/bin/env python3

'''
Provides django task management during live stage.
'''

# when run from command line
if __name__ == '__main__':
    # python imports
    import os
    import sys
    # django imports
    from django.core.management import execute_from_command_line

    # load live django settings
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'montemishkin.settings.live')

    # perform default action
    execute_from_command_line(sys.argv)


# end of file
