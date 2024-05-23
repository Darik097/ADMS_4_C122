"""
Routes and views for the bottle application.
"""

from bottle import route, view
from datetime import datetime
import BinaryVar1
import asymmetry_antitransitivity_inverseRelation
@route('/')
@route('/home')
@view('index')
def home():
    """Renders the home page."""
    return dict(
        year=datetime.now().year
    )

@route('/Var1Binary')
@view('Var1Binary')
def contact():
    """Renders the contact page."""
    return dict(
        title='Contact',
        message='Your contact page.',
        year=datetime.now().year
    )

@route('/about')
@view('about')
def about():
    """Renders the about page."""
    return dict(
        title='About',
        message='Your application description page.',
        year=datetime.now().year
    )
@route('/sbo')
@view('sbo')
def asymmetryAntitransitivityReverse():
    return dict(
        title='Assymetric Antitransitivity Reverse',
        message='Your application math page.',
        year=datetime.now().year
    )

@route('/gc')
@view('gc')
def about():
    """Renders the about page."""
    return dict(
        title='gc',
        message='Your application description page.',
        year=datetime.now().year
    )

@route('/max')
@view('max')
def about():
    """Renders the about page."""
    return dict(
        title='Максимальный поток в сети',
        message='Your application description page.',
        year=datetime.now().year
    )

@route('/Var1_Solution')
@view('Var1_Solution')
def about():
    """Renders the about page."""
    return dict(
        title='Максимальный поток в сети',
        message='Your application description page.',
        year=datetime.now().year
    )
@route('/solutionSBO')
@view('solutionSBO')
def about():
    """Renders the about page."""
    return dict(
       title='Решение и нахождение обратного решения',
       message='Your application description page.',
       year=datetime.now().year
    )